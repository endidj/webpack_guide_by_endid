import React, {useState} from "react";
import Recipe from "./Recipe";

function Menu({ recipes }){
    const [bool, setBool] = useState(true);

    const changeBool = () =>{
        setBool(!bool);
    }
    
    return (
        <>
            <button onClick={changeBool} style={{width:'70px', height:'40px'}}>버튼</button>
            <TextForStateTest bool={bool}/>
            <br/>
            <h1>요리 재료</h1>
            <br/>
            <div className="recipes">
                {recipes.map( (recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </>
    );
}

export default Menu;

const TextForStateTest = ({bool}) => {
    return (
        <>&nbsp;&nbsp;{bool.toString()}</>
    )
}