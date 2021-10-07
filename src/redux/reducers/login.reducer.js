const login = (state = [], action) => {
    console.log('hello from the login reducer');
    //when click next button on step one page - store login property information
    if (action.type === `ADD_SECTION_ONE`) {
        return action.payload;
    }
    // empty store of login properties so its reset when next new user is made
    else if (action.type === 'RESET_SECTION_ONE') {
        return [];
    }
    return state;
}

export default login;