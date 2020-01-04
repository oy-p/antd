import { createStore } from 'redux'

function reducers (state = '默认值', action) {
    switch(action.type) {
        case 'change':
            return state = action.msg
        default:
            return state
    }
}

const store = createStore(reducers)

export default store