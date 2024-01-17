import { Dispatch } from "redux"
import axios from "axios"
import { ColumnAction, ColumnActionType } from "../../types/column"

export const fetchColumns = () => {
    return async (dispatch: Dispatch<ColumnAction>) => {
        try {
            dispatch({
                type: ColumnActionType.FETCH_COLUMNS
            })
            const response = await axios.get('http://94.131.246.109:5555/v1/2/Column')
            dispatch({
                type: ColumnActionType.FETCH_COLUMNS_SUCCSESS,
                payload: response.data.Items
            })
        } catch {
            dispatch({
                type: ColumnActionType.FETCH_COLUMNS_ERROR, 
                payload: "Не вдалось отримати колонки"
            })
        }
    }
}