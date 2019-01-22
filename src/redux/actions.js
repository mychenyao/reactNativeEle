// 定义action创建函数生成action对象
import * as actionTypes from './actionTypes'
export const addData = val => {
    return {
        type: actionTypes.ADD,
        val
    }
}
export const changePage = val => {
    return {
        type: actionTypes.CHANGE_PAGE,
        val
    }
}
export const setProuctList = val => {
    return {
        type: actionTypes.SET_PROUCT_LIST,
        val
    }
}
