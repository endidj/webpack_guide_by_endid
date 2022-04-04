import React from "react";
import { IngredientsList } from "./IngredientsList";

const Recipe = ({ name, ingredients}) => {

    return (
        <>
            ====================
            <h3>{name}</h3>
            <IngredientsList ingredients={ingredients} />
            ====================
            <br/>
        </>
    );
}

export default React.memo(Recipe); //바뀐점 없을 때 렌더링 방지하기 위해 넣었다.