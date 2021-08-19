import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

/** CSS classes */
const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    /*if the button component has a button style, then have it set to the style made. 
    If false, set it to the first style option in the STYLES array*/
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    /**applies either btn--primary or btn--outline*/
    ? buttonStyle 
    /**defaults to btn--primary */
    : STYLES[0]

    //includes the buttonSize variable and sets it to the large size. If the large is not available,
    //default to the first element of SIZES array
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}>
                {children}
            </button>
        </Link>
    )
}