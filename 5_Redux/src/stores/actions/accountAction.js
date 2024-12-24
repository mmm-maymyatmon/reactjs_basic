export const add = (amount) => {
    return (dispatch) => {
        dispatch({ type: "add", payload: amount });
    };
};

export const remove = (amount) => {
    return (dispatch) => {
        dispatch({ type: "remove", payload: amount });
    };
};
