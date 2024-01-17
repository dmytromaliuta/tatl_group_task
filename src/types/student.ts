export enum StudentActionType {
    FETCH_STUDENTS = 'FETCH_STUDENTS',
    FETCH_STUDENTS_SUCCSESS = 'FETCH_STUDENTS_SUCCSESS',
    FETCH_STUDENTS_ERROR = 'FETCH_STUDENTS_ERROR',
    RATE_STUDENT = 'RATE_STUDENT',
    RATE_STUDENT_SUCCSESS = 'RATE_STUDENT_SUCCSESS',
    RATE_STUDENT_ERROR = 'RATE_STUDENT_ERROR'
}

export interface Student {
    Id: number;
    FirstName: string;
    SecondName: string;
    LastName: string;
}

export interface StudentState {
    students: Student[];
    loading: boolean;
    error: null | string;
}

interface FetchStudentAction {
    type: StudentActionType.FETCH_STUDENTS;
}

interface FetchStudentSuccessAction {
    type: StudentActionType.FETCH_STUDENTS_SUCCSESS;
    payload: Student[];
}

interface FetchStudentErrorAction {
    type: StudentActionType.FETCH_STUDENTS_ERROR;
    payload: string;
}

export type StudentAction = FetchStudentAction | FetchStudentSuccessAction | FetchStudentErrorAction

export interface StudentFields {
    id: number;
    fullName: string;
    studentId: number;
    [key: string]: string | number | undefined;
}