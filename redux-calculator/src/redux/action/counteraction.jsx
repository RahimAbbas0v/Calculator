export const incrementAction=()=>{
    return{
        type:"INCREMENT"
    }
}
export const decrementAction=()=>{
    return{
        type:"DECREMENT"
    }
}


export const setInputValueAction=(value)=>{
    return{
        type:"SET_INPUT",
        payload:value
    }
}
export const incrementByUserAction=(value)=>{
    return{
        type:"INCREMENT_BY_USER",
        payload:value

    }
}
export const decrementByUserAction=(value)=>{
    return{
        type:"DECREMENT_BY_USER",
        payload:value

    }
}
export const multiplyUserAction=(value)=>{
    return{
        type:"MULTIPLY_BY_USER",
        payload:value

    }
}
export const divideByUserAction=(value)=>{
    return{
        type:"DIVIDE_BY_USER",
        payload:value

    }
}