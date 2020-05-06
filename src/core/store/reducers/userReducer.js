const initialState = { 
    currentUser: {
        name:"Michel",
        authToken:"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNTg4Njc5NTk5LCJleHAiOjE1ODkyODQzOTl9._2o3OXCtYgnTHtaLDeq6W6WcV7wfUwqHSZQIO5NFtuHW-M0kVGdQzSo2NcHEQuf_vj4I3vBLvi1rY0fPOAreFA"
    }
}

function userReducer(state = initialState, action){
    let nextState;
    switch (action.type) {
        default:
            return state;
    }
}

export default userReducer