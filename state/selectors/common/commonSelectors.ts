import { AppState } from "@/state/store";

export const getLoading = (state: AppState) => state.common.loading;
