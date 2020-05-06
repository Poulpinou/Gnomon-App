import {sendRequest} from 'core/api/gnomonApi';
import fakeAllEventsData from '../utils/fakeAllEventsData.json';

export function getAllEventsFromDate(from, page){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = fakeAllEventsData;
            data.page = page;
            resolve(data)
        }, 3000);
    })
}