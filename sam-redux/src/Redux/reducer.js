const innitialstate = {
    count: 0,
    name:"nil"
}

const reducer = (state = innitialstate, action) => {
    if (action.type === "incr") {
        return {
            ...state, count: state.count + 1,name:state.name="v"
        }
    }
    if (action.type === "decr") {
        return {
            ...state, count: state.count - 1,name:state.name="nil"
        }
    }
    return state
}

export default reducer;