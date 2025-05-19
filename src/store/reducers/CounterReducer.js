const initialState = {
count : 0
}

const CounterReducer = (state = initialState, {type}) =>{
   switch(type){
    case "inc":
    return {count: state.count+1}

    case "dec":
        return {count: state.count-1}

        default:
   return state
   }
   
}


export {CounterReducer}