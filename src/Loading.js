import React from 'react'
import ReactPlaceholder from 'react-placeholder';
import { useState } from 'react';

const Loading = () => {
    
   export const REQUEST_STATUS = {
        LOADING: 'loading',
        SUCCESS: 'success', 
        FAILURE: 'failure'
    }
    // We export this to use in other components
    // Ideally this error and loading handling should be in a seperate component

    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)

    useEffect(() => {
        async function delayFunc() {
            try {
                await setTimeout(2000)
                setRequestStatus(REQUEST_STATUS.SUCCESS)
            } catch {
                setRequestStatus(REQUEST_STATUS.FAILURE)
            }
            // Can't use async await on useEffect so nested another function
        } 
        delayFunc()
    }, [])

    return {
        requestStatus
    }
}

export default Loading
