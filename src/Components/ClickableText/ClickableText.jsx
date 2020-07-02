import React from 'react';
import './ClickableText.css';

const ClickableText = (props) => {
    return (
        <a className="link" href={props.link}>{props.children}</a>
    )
}

export default ClickableText;
