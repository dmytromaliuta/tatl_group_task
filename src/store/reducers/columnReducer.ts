import { ColumnAction, ColumnActionType, ColumnState } from "../../types/column"

const initialState: ColumnState = {
    columns: [],
    loading: false,
    error: null
}

export const columnReducer = (state: ColumnState = initialState, action: ColumnAction): ColumnState => {
    switch(action.type) {
        case ColumnActionType.FETCH_COLUMNS:
            return { loading: true, error: null, columns: [] }
        case ColumnActionType.FETCH_COLUMNS_SUCCSESS:
            return { loading: false, error: null, columns: action.payload }
        case ColumnActionType.FETCH_COLUMNS_ERROR:
            return { loading: false, error: action.payload, columns: [] }
        default:
            return state
    }
}