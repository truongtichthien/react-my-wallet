import React from 'react';

const CommonButton = (props) => <button onClick={props.doOnClick}>{props.title}</button>;

export default CommonButton;
