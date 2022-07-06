export const initialState={
    cart:[]
};

const reducer =(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart:[...state.cart,action.item]
            }
        case 'REMOVE_FROM_CART':
            let newCart=[...state.cart];
            const idx=state.cart.findIndex((item)=>item.id===action.id);
            if(idx>=0){
                newCart.splice(idx,1);    
            }
            return {...initialState,cart:newCart};
        default:
            return state;
    }

}

export default reducer;