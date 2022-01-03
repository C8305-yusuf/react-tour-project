import React from "react";
import { data } from "../../helpers/Data";
import "./Cards.css";

function Card() {
  return (
    <div className="card-container">
        {data.map((card)=>{
            return(
                <div className = "cards" key={card.id}>

                    <div className="title">
                        <h2>{card.title}</h2>
                    </div>

                    <img src={card.image} alt={card.title}/>

                    <div className ="card-over">
                        <p>{card.desc}</p>
                    </div>
                </div>
            )
        })}

    </div>
  );
}

export default Card;



