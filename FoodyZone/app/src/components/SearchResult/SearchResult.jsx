import styled from "styled-components";
export const SearchResult = ({ data: food }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {food?.map((food) => (
          <FoodCard key={food.name}>
            <div className="food_image">
              <img src={BASE_URL + food.image} alt="" />
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("./bg.png");
  background-size: cover;
  height: calc(100vh - 210px);
`;
const FoodCards = styled.div``;
const FoodCard = styled.div``;
