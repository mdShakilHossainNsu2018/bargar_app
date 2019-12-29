import React, {Fragment} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: .5,
    cheese: .4,
    meat: 1.4,
    bacon: .7,

};

export default class BurgerBuilder extends React.Component{

    state = {
      ingredients: {
          salad:0,
          bacon:0,
          cheese:0,
          meat:0,
      },
        totalPrice: 4,
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
    };

    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        if (oldCount <=0 ){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceAddition;
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
    };

    render() {

        const disabledInfo = {
          ...this.state.ingredients
        };

        for (let kye in disabledInfo ){
            disabledInfo[kye] = disabledInfo[kye] <= 0
        }

        return(
            <Fragment>
               <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disabledInfo} />
            </Fragment>
        );
    }

}