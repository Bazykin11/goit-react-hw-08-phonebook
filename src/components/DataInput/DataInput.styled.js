import styled from 'styled-components';

export const SectionFormInput = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #eaff61;
  border-radius: 4px;
  font-family: Roboto;
`;

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LableInput = styled.label`
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  &:focus {
    outline: none;
    border: 2px solid #eaff61;
    border-radius: 2px;
  }
`;
export const SubmitBtn = styled.button`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
  padding-bottom: 5px;

  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ffc8a8;
  scale: 1;
  transition: background-color 250ms linear;
  transition: scale 250ms linear;

  font-size: 12px;
  &:hover {
    background-color: #ffffff;
    border: 1px solid #000;
    scale: 1.1;
  }
`;
