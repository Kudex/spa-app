import React from 'react';
import styles from './style/Planet.module.css';


const Planet = (props) => { 

    

    return (
        
        <div className={styles['planets']}>
            <span class='planet_name' style={{ fontFamily: 'Roboto Mono'}}>{props.name}</span>
            <img src={props.images} alt={props.name}></img>
            
        </div>
       
        
    );
};



export default Planet;