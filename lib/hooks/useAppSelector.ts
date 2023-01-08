import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppState } from "@/state/store";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
