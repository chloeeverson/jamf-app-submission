const gList = (state = [], action) => {
    console.log('hello from the group list reducer');
  
    // set group list with data from server
    if (action.type === 'SET_GROUP_LIST') {
      console.log('action payload in group reducer', action.payload)
      //the action payload is a new array from the server
      //it has ALL the information in it - no need to spread 
      //& add to previous state
      return action.payload;
    }
    return state;
  }
  
  export default gList;