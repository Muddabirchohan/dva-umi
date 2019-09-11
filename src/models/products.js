export default {

namespace: 'products',
// state: {
//     name: 'hello',
//     collection: [ {id: 1 } ,{ id: 2},{ id: 3}],
//     mydata: [],
//     cart: []
// },
state: {
  count: 0,
  users: [{ name: 'dva', id: 1 }, { name: 'antd', id: 2 }],
  todos: []
},
// effects: {
//     *fetch({ call, put }) {
//         const api = fetch('https://jsonplaceholder.typicode.com/users').then(res => {

//         });
//     //   const response = yield call(api);
//     //   const data = api;

//       console.log("response",api)
//       yield ({ 
//           type: 'save',
//           payload: api
//          });
//     },


//     *addToCart( {payload: response }, {call,put}){
//         yield put({ 
//                   type: 'save',
//                   payload: response
//                  });
//     }


//   },





  reducers: {
  
      add(state) {
         return {
           ...state,
           count: state.count + 1
          }
         },
    
         clear(state){
          return {
            ...state,
            count: 0
           }
         },

         getuser(state, {payload: obj }){
            console.log(obj);
  return {
    ...state,
    users: [...state.users, obj]
  }
  },

  deleteuser(state , {payload: id}){
    return {
      ...state,
      users: state.users.filter(item => item.id !== id)
    }
  },

   getDatafromApi(state){
            return state;
                }

                //          addUser(state){
// return {
//   ...state,
//   users: [...users,action.data]
// }
//          }

         
    // save(state,action ) {
    //     console.log("action", action)
    //   return { ...state, mydata: action.payload };

    // },

    // delete(state , {payload: id}){
    //   console.log(state);
    //   return state.collection.filter(obj => obj.id !== id);
    // }
},  
effects: {
  *addAfter1Second(action, { call, put }) {
    // yield call(delay, 1000);
    yield put({ type: 'add' });
  },

  *clearAfter1Second(action, { call, put }) {
    // yield call(delay, 1000);
    yield put({ type: 'clear' });
  },

  *fetch(action ,{call ,put}){
     fetch('https://jsonplaceholder.typicode.com/todos').then(
      res => {
       const data= Promise.resolve(res);
        //  const data =  res.json();
          console.log(data)
          
        }
    )
    yield put ({
       type: 'getDatafromApi',
        // todos: state.todos = data
      })
  }
  // *getuser(payload,action ,{call, put }) {
  //   // yield call(delay, 1000);
  //   // console.log(user)
  //   yield put({
  //      type: 'adduser',
  //     payload: action.payload });
  // },
}

}