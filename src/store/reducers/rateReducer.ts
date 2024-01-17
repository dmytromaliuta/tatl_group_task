import { RateAction, RateActionType, RateState } from "../../types/rate"

const initialState: RateState = {
    rates: [],
    loading: false,
    error: null
}

export const rateReducer = (state: RateState = initialState, action: RateAction): RateState => {
    switch(action.type) {
        case RateActionType.FETCH_RATES:
            return { loading: true, error: null, rates: [] }
        case RateActionType.FETCH_RATES_SUCCSESS:
            return { loading: false, error: null, rates: action.payload }
        case RateActionType.FETCH_RATES_ERROR:
            return { loading: false, error: action.payload, rates: [] }
        case RateActionType.RATES_STUDENT_START:
            return { loading: true, error: null, rates: [...state.rates] }
        case RateActionType.RATES_STUDENT_SUCCESS:

            let newRates = state.rates.concat(action.payload.filter(obj2 => 
                !state.rates.some(obj1 => obj1.Id === obj2.Id)
            ));

            return { loading: false, error: null, rates: newRates }
        case RateActionType.RATES_STUDENT_ERROR:
            return { loading: false, error: action.payload, rates: [...state.rates] }
        case RateActionType.UNRATES_STUDENT_START:
            return { loading: true, error: null, rates: [...state.rates] }
        case RateActionType.UNRATES_STUDENT_SUCCESS:

            const newRatesAfterDelete =  state.rates.filter(item => {
                return !(item.ColumnId === action.payload.ColumnId && item.SchoolboyId === action.payload.SchoolboyId)
            })
            
            return { loading: false, error: null, rates: [...newRatesAfterDelete] }
        case RateActionType.UNRATES_STUDENT_ERROR:
            return { loading: false, error: action.payload, rates: [...state.rates] }



        default:
            return state
    }
}