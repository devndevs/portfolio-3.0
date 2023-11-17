import {
  Root,
  Field,
  Label,
  Message,
  Control,
  Submit,
} from '@radix-ui/react-form';
import { Box } from '@radix-ui/themes';

import styled from 'styled-components';

const StyledRoot = styled(Root)`
  width: 260px;
`;

const StyledField = styled(Field)`
  display: grid;
  margin-bottom: 10px;
`;

const StyledLabel = styled(Label)`
  font-size: 15px;
  font-weight: 500;
  line-height: 35px;
  color: white;
`;

const StyledMessage = styled(Message)`
  font-size: 13px;
  color: white;
  opacity: 0.8;
`;

const StyledInput = styled(Control)`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 15px;
  color: white;
  background-color: var(--black-a5);
  box-shadow: 0 0 0 1px var(--black-a9);

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px black;
  }

  &::selection {
    background-color: var(--black-a9);
    color: white;
  }

  padding: 0 10px;
  height: 35px;
  line-height: 1;
`;

const StyledTextarea = styled(Control)`
  // ... (similar styles as Input)
  resize: none;
  padding: 10px;
`;

const StyledButton = styled(Submit)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  width: 100%;
  background-color: white;
  color: var(--violet-11);
  box-shadow: 0 2px 10px var(--black-a7);

  &:hover,
  &:focus {
    background-color: var(--mauve-3);
    box-shadow: 0 0 0 2px black;
  }
`;

const StyledBox = styled(Box)`
  background-color: var(--black-a5);
`;

export {
  StyledRoot,
  StyledField,
  StyledLabel,
  StyledMessage,
  StyledInput,
  StyledTextarea,
  StyledButton,
  StyledBox,
};
