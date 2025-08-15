import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
        <Button text="VIA SUPPORT CHAT" icon={<FaPhoneAlt fontSize="24px" />} />
      </div>
      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
