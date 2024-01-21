// here we define all the application level state and define action to make the changes to the state

export const initialState = {
    basket: [],
}

//Selector
export const getBasketTotal = (basket) => {
    return (basket?.reduce((amount, item) => item.price + amount, 0));
}


const reducer = (state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

            case "Remove_From_Basket":
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
                let newBasket = [...state.basket];  // Corrected: Use spread operator to create a new array
            
                if (index >= 0) {
                    newBasket = newBasket.slice(0, index).concat(newBasket.slice(index + 1));
                } else {
                    console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket`);
                }
                return {
                    ...state,
                    basket: newBasket
                };
        default:
            return state;
    }
}

export default reducer;