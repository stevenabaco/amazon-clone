export const initialState = {
	basket: [
		{
			id: '12321341',
			title:
				'The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback',
			price: 11.96,
			rating: 3,
			image:
				'https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg',
		},
		{
			id: '123214324',
			title:
				'The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback',
			price: 11.96,
			rating: 3,
			image:
				'https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg',
		},
	],
	user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			// Logic for adding item to basket'
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
	
		case 'REMOVE_FROM_BASKET':
			// Logic for Removing item from basket
      
      // We cloned the basket
      let newBasket = [...state.basket];

      // We check to see if product exists
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      
      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Can't remove product (id: $(action.id) as its not available)`
        )
      }
      
      return { ...state, basket: newBasket };
		
		// Default case if nothing else
		default:
			return state;
	}
};

export default reducer;
