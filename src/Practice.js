import React from 'react';
import { useState, useEffect } from 'react';
import ReactPlaceholder from 'react-placeholder';
import Loading, { REQUEST_STATUS } from './Loading'
 
const Practice = ({ title }) => {
        <div>
            <ReactPlaceholder 
                type="media" 
                rows={7} 
                ready={requestStatus === REQUEST_STATUS.SUCCESS}>
                    <h2>{title}</h2>
            </ReactPlaceholder>
        </div>

}

export default Practice
