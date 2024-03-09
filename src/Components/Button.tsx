
import React from 'react';

type Props = {
    name: string
    onClick: ()=> void
    disabled?: boolean
};
export const Button = (props: Props) => {
    const onClickHandler = () => {
      props.onClick()
    }
    return (
            <button onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
    );
};


