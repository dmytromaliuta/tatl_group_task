import { StudentAction, StudentActionType, StudentState } from "../../types/student"

const initialState: StudentState = {
    students: [],
    loading: false,
    error: null
}

export const studentReducer = (state: StudentState = initialState, action: StudentAction): StudentState => {
    switch(action.type) {
        case StudentActionType.FETCH_STUDENTS:
            return { loading: true, error: null, students: [] }
        case StudentActionType.FETCH_STUDENTS_SUCCSESS:
            return { loading: false, error: null, students: action.payload }
        case StudentActionType.FETCH_STUDENTS_ERROR:
            return { loading: false, error: action.payload, students: [] }
        default:
            return state
    }
}