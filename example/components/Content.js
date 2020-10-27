import React from 'react';
import PropTypes from 'prop-types';
import './common.css'
const ContentText = (props) => {
    console.log(props);
    return (
        <>
            <section 
                className={`content ${props.theme}`} 
            >
                <p className={`content-text ${props.color}`}>
                    hello world!
                    This site can’t be reachedwww.facebook.com’s server IP address could not be found.
                </p>
            </section>
        </>
    )
}
 ContentText.propTypes = {
     theme: PropTypes.string.isRequired,
     color: PropTypes.string.isRequired
 }
export default ContentText;