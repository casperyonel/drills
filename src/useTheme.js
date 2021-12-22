import React from 'react'
import { useState } from 'react'

const useTheme = (startingTheme = 'light') => {    

    const [theme, setTheme] = useState(startingTheme)

    function validateTheme(themeValue) {
        if (themeValue === 'dark') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return { // Returning an object, so need to destructure when importing component
        theme,
        setTheme: validateTheme, // This function makes it auto light theme
    }
} // .

export default useTheme;