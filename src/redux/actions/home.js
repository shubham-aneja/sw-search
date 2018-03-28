import Types from './types.js'
import {api} from '../../utils/api'

const SEARCH_URL = `https://swapi.co/api/planets/`;

const thresholdTime = 60 * 1000;
/*60 minutes in ms*/
const thresholdCalls = 15;
/*15 calls per minute is allowed*/
const forbiddenUser = 'Luke Skywalker';

export const homeOnValueChange = (value)=> {
    return (dispatch)=> {
        const shouldCheckTime = getShouldCheckTime();
        if (shouldCheckTime) {
            const isMaxCallLimitReached = getIsLimitReached();
            if (isMaxCallLimitReached) {
                dispatch(homeSetError("Maximum call limit reached. Please wait for one minute"));
                return
            }
        }
        /* Reset the error, if there was any*/
        dispatch(homeSetError(""));


        dispatch(homeOnValueUpdate(value));

        api(`${SEARCH_URL}?search=${value}`).then(res => {
            dispatch(homeSetError(""));
            if (res.count > 0) {
                dispatch(homeOnOptionsUpdate(res.results));
                dispatch(homeSetNoResult(false))
            } else {
                dispatch(homeOnOptionsUpdate([]));
                dispatch(homeSetNoResult(true));
            }
        }).catch(e => {
            dispatch(homeSetError("Something went wrong"));
        });
    }
};

export const homeOnValueUpdate = (value)=> (
{
    type: Types.HOME_UPDATE_INPUT_VALUE,
    value
}
);

export const homeOnOptionsUpdate = (options)=> (
{
    type: Types.HOME_UPDATE_OPTIONS,
    options
}
);

export const homeSetError = (error)=> (
{
    type: Types.HOME_SET_ERROR,
    error
}
);

export const homeSetNoResult = (isNoResult)=> (
{
    type: Types.HOME_SET_NO_RESULT,
    isNoResult
}
);

/**
 * Only the user Luke Skywalker can make unlimited calls
 * @returns {boolean}
 */
function getShouldCheckTime() {
    const userName = localStorage.getItem('username');
    return userName !== forbiddenUser
}


/**
 * check if the use has reached 15 calls per minute limit or not
 * @returns {boolean}
 */
const getIsLimitReached = (function getIsLimitReached() {
    let lastCalls = [];
    let hasLimitAlreadyReached = false;

    return function getIsLimitReachedPrivate() {
        let isLimitReached;
        if (hasLimitAlreadyReached) {
            /*Limit has been reached by earlier attemps, wait until that time gets over*/
            isLimitReached = true;
        } else {
            const currentTime = new Date();
            lastCalls = lastCalls.filter(lastCall => currentTime - lastCall <= thresholdTime);
            isLimitReached = lastCalls.length >= thresholdCalls;
            if (!isLimitReached) {
                /* Since the limit has not been reached yet, so this call will go thru*/
                lastCalls.push(currentTime);
            } else {
                /*Once the limit has been reached, user has to wait for 60 more seconds to go furthur*/
                hasLimitAlreadyReached = true;
                const timer = setTimeout(()=> {
                    hasLimitAlreadyReached = false;
                    clearTimeout(timer);
                }, thresholdTime);
            }
        }
        return isLimitReached

    }
})();