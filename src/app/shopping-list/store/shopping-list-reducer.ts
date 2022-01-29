import { Ingredients } from '../../shared/ingredients.model';
import { ADD_INGREDIENT, AddIngredient } from './shopping-list-actions';

const initialState = {
    ingredients:[
        new Ingredients('Apples', 5),
        new Ingredients('Tomatoes', 10)
    ]
}

export function ShoppingListReducer(state = initialState, action: AddIngredient){
    switch(action.type){
        case ADD_INGREDIENT:
            return {
                ...state,
                Ingredients: [...state.ingredients, action.payload]
            };
        default: 
            return state;
    }
}