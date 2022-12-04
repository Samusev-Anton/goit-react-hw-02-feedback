import React from "react";
// import { Block } from "./Section.styled";

const Section = ({ title, children }) => {
    return (
        <section>
        <h2>{title}</h2>
        {children}
        </section>
    )
}
export default Section