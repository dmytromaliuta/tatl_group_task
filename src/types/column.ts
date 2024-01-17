export enum ColumnActionType {
    FETCH_COLUMNS = 'FETCH_COLUMNS',
    FETCH_COLUMNS_SUCCSESS = 'FETCH_COLUMNS_SUCCSESS',
    FETCH_COLUMNS_ERROR = 'FETCH_COLUMNS_ERROR'
}

export interface Column {
    Id: number;
    Title: string;
}

export interface ColumnState {
    columns: Column[];
    loading: boolean;
    error: null | string;
}

interface FetchColumnAction {
    type: ColumnActionType.FETCH_COLUMNS;
}

interface FetchColumnSuccessAction {
    type: ColumnActionType.FETCH_COLUMNS_SUCCSESS;
    payload: Column[];
}

interface FetchColumnErrorAction {
    type: ColumnActionType.FETCH_COLUMNS_ERROR;
    payload: string;
}

export type ColumnAction = FetchColumnAction | FetchColumnSuccessAction | FetchColumnErrorAction