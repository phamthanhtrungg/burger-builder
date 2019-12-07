export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';


//#region Action creator
export const addIngredient = (igType) => {
    return {
        type: ADD_INGREDIENT,
        val:igType
    }
}
export const removeIngredient = (igType) => {
    return {
        type: REMOVE_INGREDIENT,
        val:igType
    }
}

//#endregion