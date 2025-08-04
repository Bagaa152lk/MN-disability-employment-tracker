import { useContext } from "react";
import LoadingContext from "../components/loading/LoadingContext";
import { HIDE_CONFIRM, SHOW_CONFIRM } from "../components/loading/Reducer";

function useLoading() {
    const [loadingState, dispatch] = useContext(LoadingContext);

    const showLoading = (isLoading, loadingType = "kendo") => {
        dispatch({
            type: isLoading ? SHOW_CONFIRM : HIDE_CONFIRM,
            payload: {
                text: loadingType,
            },
        });
    };


    return { showLoading: showLoading, loadingState };
}

export default useLoading;