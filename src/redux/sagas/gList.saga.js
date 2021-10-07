import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

// fetches all group list from database
function* fetchGroupList() {
  try {
    //yield makes us wait until the async thing (axios) is done
    //keep the response in a variable to access later
    const response = yield axios.get('/api/group')
    //when its done successfully then 'dispatch' the action to set reducer
    yield put({ type: 'SET_GROUP_LIST', payload: response.data })
    console.log('response . data:', response.data);


  } catch (error) {
    alert(`Sorry. Things aren't working at the moment. Try again later`);
    console.log('error getting groups', error);
  }
}

// if dispatch called - triggers function that follows
function* gListSaga() {
  yield takeLatest('FETCH_GROUP_LIST', fetchGroupList);
}

export default gListSaga;