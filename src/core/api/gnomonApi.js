import { GNOMON_API_URL } from 'react-native-dotenv'
import Store from 'core/store/configureStore'

export function sendRequest(url, request){
    url = GNOMON_API_URL + url;
    request.headers = {
        ...request.headers,
        Authorization: `Bearer ${getAuthToken()}`
    }
    console.log(url);
    console.log(request);
    return fetch(url, request);
}

export function getAuthToken(){
    const state = Store.getState();
    const user = state.userReducer.currentUser;

    if(user === undefined){
        throw new Error('No current user');
    }

    return user.authToken;
}