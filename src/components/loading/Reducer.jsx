export const SHOW_CONFIRM = "SHOW_CONFIRM";
export const HIDE_CONFIRM = "HIDE_CONFIRM";

export const initialState = {
    show: false,
    text: "",
    count: 0,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CONFIRM:
            var temp1 = {
                show: true,
                text: action.payload.text,
                count: state.count + 1,
            };
            return temp1;
        case HIDE_CONFIRM:
            let temp;
            if (state.count > 0) {
                temp = { ...state, count: state.count - 1 };
                if (temp.count === 0) {
                    temp.show = false;
                }
            } else {
                temp = initialState;
            }
            return temp;
        default:
            return initialState;
    }
};
