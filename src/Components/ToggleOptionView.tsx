import React, { useState } from 'react';
import { ToggleOption } from '../Types/ToggleOption';

function ToggleOptionView(props: { option: ToggleOption }) {

    return (
        <div>
            { props.option.label }
        </div>
    );
}

export default ToggleOptionView;
