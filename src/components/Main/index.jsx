import React from "react";
import { useFetch} from "use-http";
import styles from "./main.module.scss";

function NewShop() {
  const options = {} 
  const { data = [] } = useFetch('https://fakestoreapi.com/products', options, [])
  return (
 
    <div>
     <div className={styles.title}>
      <h2>Miriana's Shop</h2>
      </div>
        {data.map(data => 
            (<div key={data.id}>
                <div className={styles.form}>
                <h3>{data.title}</h3>
                <h4>{data.price} $</h4>
                <p>{data.description}</p>
                <img src={data.image}></img>
                <p>⭐{data.rating.rate}</p>
                
                </div>
                </div>))}
    </div>
)
      
}

export default NewShop; 