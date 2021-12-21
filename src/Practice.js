import React from 'react';
import { useState, useEffect } from 'react';
import ReactPlaceholder from 'react-placeholder';
 
const Practice = ({ title }) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function delayFunc() {
            try {
                await setTimeout(1000000)
                setIsLoading(false)
            } catch {
                setIsLoading(false)
            }
        }
        delayFunc()
    }, [])


    if (isLoading === true) return <div>Loading...</div>

    return (
        <div>
            <ReactPlaceholder type="media" rows={7} ready={isLoading === false}>
                <h2>{title}</h2>
            </ReactPlaceholder>
        </div>
    )
}

export default Practice
