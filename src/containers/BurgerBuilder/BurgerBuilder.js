import React, {Fragment} from 'react';
import Burger from '../../components/Burger/Burger'

export default class BurgerBuilder extends React.Component{

    render() {
        return(
            <Fragment>
               <Burger/>
                <div>Build container</div>
            </Fragment>
        );
    }

}