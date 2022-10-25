import React from "react";
import './style.css';

const Greet = props  => {
    
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello  {name} A.K.A {heroName}</h1>
        
        </div>
    )
}

export default Greet;