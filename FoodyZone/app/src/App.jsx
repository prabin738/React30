import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

//api for fetching data variable

const BASE_URL = "http://localhost:9000/";

const App = () => {
  //usestate hooks for fetching data from backend
  const [data, setData] = useState(null);

  //state to show loading data
  const [loading, setLoading] = useState(false);
  //state to show error if occurs
  const [error, setError] = useState(null);

  //function to perform network call

  //useeffect hooks to prevent infinite rendering loop
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setLoading(false);
        console.log(json);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);
  //statement what to do if error
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading.......</div>;

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input placeholder="Search Food Here" />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Launch</Button>
        <Button>Breakfast</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <SearchResult />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
`;
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      padding: 0px 10px;
    }
  }
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  color: white;
  padding-bottom: 40px;
`;

const Button = styled.div`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
`;
