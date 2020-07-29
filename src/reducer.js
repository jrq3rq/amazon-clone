export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
    basket: [
        {
            id: "32455464775858",
            title: "Echo Dot (3rd Gen) with clock for $9.99 and 2 months of Amazon Music Unlimited for $19.98 with Auto-renewal -Sandstone",
            price: 29.97,
            rating: 4,
            image: "https://images-na.ssl-images-amazon.com/images/I/61igRhfrALL._AC_SL1000_.jpg",
        },
        {
            id: "32455464775858",
            title: "Echo Dot (3rd Gen) with clock for $9.99 and 2 months of Amazon Music Unlimited for $19.98 with Auto-renewal -Sandstone",
            price: 29.97,
            rating: 4,
            image: "https://images-na.ssl-images-amazon.com/images/I/61igRhfrALL._AC_SL1000_.jpg",
        },
        {
            id: "32455464775858",
            title: "Echo Dot (3rd Gen) with clock for $9.99 and 2 months of Amazon Music Unlimited for $19.98 with Auto-renewal -Sandstone",
            price: 29.97,
            rating: 4,
            image: "https://images-na.ssl-images-amazon.com/images/I/61igRhfrALL._AC_SL1000_.jpg",
        },
    ],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // logic for removing from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // items exist in basket, remove it....
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket`
                );
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