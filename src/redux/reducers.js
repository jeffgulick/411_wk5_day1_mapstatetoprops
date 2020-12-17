import { combineReducers } from 'redux'

const user = (state = [], action) => {
    return {
        state
    }
}

// const cars = (state = []) => state

const cars = (state = [], action) => {
    // console.log(action)
    return state
}

export default combineReducers({ user, cars })