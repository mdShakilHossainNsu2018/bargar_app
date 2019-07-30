import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let transformedBurger = Object.keys(props.ingredients).map(igKey=>{

        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+1} type={igKey}/>
        })
    }).reduce((arr, el)=>{
        return arr.concat(el);
    });

    if (transformedBurger.length === 0){
        transformedBurger = <p>Please add ingredient</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {transformedBurger}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    )
};

export default burger;