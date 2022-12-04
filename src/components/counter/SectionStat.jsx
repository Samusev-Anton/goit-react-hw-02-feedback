import React from "react";

const SectionStat = ({ title, children, disable }) => {
    // console.log(disable);
    return (<>{
        disable > 0 &&
    
        <section>
            <h2>{title}</h2>
            {children}
        </section>}
        </>
    )
}
export default SectionStat