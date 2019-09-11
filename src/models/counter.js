export default {
    namespace: 'counter',
    state: {
        count: 0
    },

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
          
        
          }
    
    
    }