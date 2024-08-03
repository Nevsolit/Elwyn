import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "../store";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const useRedux = () => {
    const useAppDispatch = () => useDispatch<AppDispatch>();
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

    return { useAppDispatch, useAppSelector };
};

export default useRedux;
