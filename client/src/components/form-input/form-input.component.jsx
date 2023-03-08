import React from 'react';
import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

//import './form-input.styles.css';

const FormInput = ({ label, handleChange, ...props}) => {
    return(
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...props} />
            {
                label ? (
                    <FormInputLabel className={props.value.length ? 'shrink' : ''}>
                    { label }
                    </FormInputLabel>) : null
            }
        </GroupContainer>
    );
}

export default FormInput;