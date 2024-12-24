export const insert = (user) => {
    return (dispatch) => {
        dispatch({ type: "insert", payload: user });
    };
};

export const drop = (user) => {
    return (dispatch) => {
        dispatch({ type: "drop", payload: user });
    };
};
