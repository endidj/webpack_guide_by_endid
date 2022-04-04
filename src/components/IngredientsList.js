import React from "react";

export const IngredientsList = ({ ingredients }) => {
    return(
        <ul className="ingredients">
            {ingredients.map( ingredient => (
                <li> '{ ingredient.amount }' {ingredient.measurement}의 {ingredient.name} </li>
            ))}
        </ul>
    )
}