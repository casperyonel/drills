import React from 'react'
import { useState } from 'react'

const Theme = () => {
    
    const [theme, setTheme] = useState('light')
    
    return (
        <div className={theme === 'light' ? 'lightTheme' : 'darkTheme'}>
            <label>Theme
                <select value={theme} onChange={e => setTheme(e.target.checked)}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option> 
                </select>
            </label>
        </div>
    )
}

export default Theme
