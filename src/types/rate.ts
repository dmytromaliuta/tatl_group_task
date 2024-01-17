export enum RateActionType {
    FETCH_RATES = 'FETCH_RATES',
    FETCH_RATES_SUCCSESS = 'FETCH_RATES_SUCCSESS',
    FETCH_RATES_ERROR = 'FETCH_RATES_ERROR',
    RATES_STUDENT_START = 'RATES_STUDENT_START',
    RATES_STUDENT_SUCCESS = 'RATES_STUDENT_SUCCESS',
    RATES_STUDENT_ERROR = 'RATES_STUDENT_ERROR',
    UNRATES_STUDENT_START = 'UNRATES_STUDENT_START',
    UNRATES_STUDENT_SUCCESS = 'UNRATES_STUDENT_SUCCESS',
    UNRATES_STUDENT_ERROR = 'UNRATES_STUDENT_ERROR'
}

interface CellData {
    SchoolboyId: number;
    ColumnId: number;
}

export interface Rate {
    Id: number;
    Title: string;
    SchoolboyId: number;
    ColumnId: number;
}

export interface RateState {
    rates: Rate[];
    loading: boolean;
    error: null | string;
}


interface FetchRateAction {
    type: RateActionType.FETCH_RATES;
}

interface FetchRateSuccessAction {
    type: RateActionType.FETCH_RATES_SUCCSESS;
    payload: Rate[];
}

interface FetchRateErrorAction {
    type: RateActionType.FETCH_RATES_ERROR;
    payload: string;
}

interface RateStudentsStart {
    type: RateActionType.RATES_STUDENT_START;
}

interface RateStudentsSuccess {
    type: RateActionType.RATES_STUDENT_SUCCESS;
    payload: Rate[];
}

interface RateStudentsError {
    type: RateActionType.RATES_STUDENT_ERROR;
    payload: string;
}

interface UnRateStudentsStart {
    type: RateActionType.UNRATES_STUDENT_START;
}

interface UnRateStudentsSuccess {
    type: RateActionType.UNRATES_STUDENT_SUCCESS;
    payload: CellData;
}

interface UnRateStudentsError {
    type: RateActionType.UNRATES_STUDENT_ERROR;
    payload: string;
}

export type RateAction = FetchRateAction | FetchRateSuccessAction | FetchRateErrorAction 
| RateStudentsStart | RateStudentsSuccess | RateStudentsError | UnRateStudentsSuccess
| UnRateStudentsStart | UnRateStudentsError