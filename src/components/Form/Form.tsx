import React from 'react';
import {
  StyledRoot,
  StyledField,
  StyledLabel,
  StyledMessage,
  StyledInput,
  StyledTextarea,
  StyledButton,
  StyledBox,
} from './form.styles';

/* eslint-disable-next-line */
export interface FormProps {}

export function Form(props: FormProps) {
  return (
    <StyledBox>
      <StyledRoot>
        <StyledField name="email">
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <StyledLabel>Email</StyledLabel>
            <StyledMessage match="valueMissing">
              Please enter your email
            </StyledMessage>
            <StyledMessage match="typeMismatch">
              Please provide a valid email
            </StyledMessage>
          </div>
          <StyledInput asChild>
            <input type="email" required />
          </StyledInput>
        </StyledField>
        <StyledField name="question">
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <StyledLabel>Question</StyledLabel>
            <StyledMessage match="valueMissing">
              Please enter a question
            </StyledMessage>
          </div>
          <StyledTextarea asChild>
            <textarea required />
          </StyledTextarea>
        </StyledField>
        <StyledButton asChild>
          <button className="Button" style={{ marginTop: 10 }}>
            Post question
          </button>
        </StyledButton>
      </StyledRoot>
    </StyledBox>
  );
}

export default Form;
