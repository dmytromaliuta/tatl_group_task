import { Dispatch } from "redux"
import { StudentAction, StudentActionType } from "../../types/student"
import axios from "axios"

export const fetchStudents = () => {
    return async (dispatch: Dispatch<StudentAction>) => {
        try {
            dispatch({
                type: StudentActionType.FETCH_STUDENTS
            })
            const response = await axios.get('http://94.131.246.109:5555/v1/2/Schoolboy')
            dispatch({
                type: StudentActionType.FETCH_STUDENTS_SUCCSESS,
                payload: response.data.Items
            })
        } catch {
            dispatch({
                type: StudentActionType.FETCH_STUDENTS_ERROR, 
                payload: "Не вдалось отримати студентів"
            })
        }
    }
}