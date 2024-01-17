import { Dispatch } from "redux"
import axios from "axios"
import { RateAction, RateActionType } from "../../types/rate"

export const fetchRates = () => {
    return async (dispatch: Dispatch<RateAction>) => {
        try {
            dispatch({
                type: RateActionType.FETCH_RATES
            })
            const response = await axios.get('http://94.131.246.109:5555/v1/2/Rate')
            dispatch({
                type: RateActionType.FETCH_RATES_SUCCSESS,
                payload: response.data.Items
            })
        } catch {
            dispatch({
                type: RateActionType.FETCH_RATES_ERROR, 
                payload: "Не вдалось отримати дані про відвідуваність"
            })
        }
    }
}

export const rateStudent = (SchoolboyId: number, ColumnId: number) => {
    return async (dispatch: Dispatch<RateAction>) => {
        try {
            dispatch({
                type: RateActionType.RATES_STUDENT_START
            })
            
            await axios.post('http://94.131.246.109:5555/v1/2/Rate', {
                SchoolboyId,
                ColumnId,
                Title: "H"
            })

            const response = await axios.get('http://94.131.246.109:5555/v1/2/Rate', {
                params: {
                    SchoolboyId
                }
            })

            dispatch({
                type: RateActionType.RATES_STUDENT_SUCCESS,
                payload: response.data.Items
            })
        } catch {
            dispatch({
                type: RateActionType.RATES_STUDENT_ERROR, 
                payload: "Не вдалось змінити відмітку"
            })
        }
    }
}

export const unRateStudent = (SchoolboyId: number, ColumnId: number) => {
    return async (dispatch: Dispatch<RateAction>) => {
        try {
            dispatch({
                type: RateActionType.UNRATES_STUDENT_START
            })

            await axios.post('http://94.131.246.109:5555/v1/2/UnRate', {
                SchoolboyId,
                ColumnId
            })
            
            dispatch({
                type: RateActionType.UNRATES_STUDENT_SUCCESS,
                payload: {
                    SchoolboyId,
                    ColumnId
                }
            })
        } catch {
            dispatch({
                type: RateActionType.UNRATES_STUDENT_ERROR, 
                payload: "Не вдалось видалити відмітку"
            })
        }
    }
}