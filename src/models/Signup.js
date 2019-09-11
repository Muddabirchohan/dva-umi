import { actionChannel } from "redux-saga/effects";

export default {

    namespace: 'signup',
    state:
    {
        currentuser: []
    },

reducers: {
register(state, {payload: data}){
if(data !== null){
    
    return {
    ...state,
    currentuser: [...state.currentuser,data]
}
}
else {
    return {
        ...state,
        currentuser: []
    }
  }
},

login(state){
    return state;
}


},

effects: {
    *registerUser(action, { call, put,select }) {
        const user = yield select(states => states.currentuser);
        // const assets = yield call(fetchData, user);
                yield put({ 
                    type: 'register',
                    user: action.payload
             });
 }
}



}