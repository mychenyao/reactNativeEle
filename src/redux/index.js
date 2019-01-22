// 定义redux 规则
import * as actionTypes from './actionTypes'
export default (state, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                add: action.val
            }
        case actionTypes.CHANGE_PAGE:
            return {
                ...state,
                Page: action.val
            }
        case actionTypes.SET_PROUCT_LIST:
            return {
                ...state,
                eleProductList: JSON.parse(JSON.stringify(action.val))
            }
        default:
            return state
    }
}