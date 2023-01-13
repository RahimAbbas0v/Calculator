const initalValue = {
    count: 0,
    inputValue: "",
};
export const counterReducer = (state = initalValue, action) => {
    switch (action.type) {
        case "MULTIPLY_BY_USER":
            return {
                ...state,
                count: state.count / Number(action.payload),
                inputValue: ""
            };
        case "DIVIDE_BY_USER":
            return {
                ...state,
                count: state.count * Number(action.payload),
                inputValue: ""
            };
        case "INCREMENT_BY_USER":
            return {
                ...state,
                count: state.count + Number(action.payload),
                inputValue: ""
            };
        case "DECREMENT_BY_USER":
            return {
                ...state,
                count: state.count - Number(action.payload),
                inputValue: ""
            };
        case "SET_INPUT":
            return {
                ...state,
                inputValue: action.payload
            };
        default:
            return state
    }
};
