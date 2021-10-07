import loginReducer from './login.reducer';

// login reducer testing - all tests should pass

describe('testing loginReducer...', () => {

    test('initial state should be an empty ARRAY...', () => {
        let action = [];
        let state = undefined;
        let returnedState = loginReducer(state, action);
        expect(returnedState).toEqual([])
    })

    test('test login information...', () => {
        let login = {
            email: 'cheese@gmail.com',
            password: 'toothbrush',
            complete: true
        }
        let action = { type: 'ADD_SECTION_ONE', payload: login };
        let state = [];
        let returnedState = loginReducer(state, action);
        expect(returnedState).toEqual(login)
    })

    test('test reset login', () => {
        let action = { type: 'RESET_SECTION_ONE' };
        let state = { email: 'china@gmail.com', password: 'bubblegum', complete: true };
        let returnedState = loginReducer(state, action);
        expect(returnedState).toEqual([])
    })

})