const group = (state = [], action) => {
    console.log('hello from the group reducer');
    //when click next button on step one page - store group property information
    if (action.type === `ADD_SECTION_TWO`) {
        return action.payload;
    }
    // empty store of group properties so its reset when next new user is made
    else if (action.type === 'RESET_SECTION_TWO') {
        return [];
    }
    return state;
}

export default group;