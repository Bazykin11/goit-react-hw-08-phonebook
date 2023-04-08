import styled from 'styled-components';

export const Btn = styled.button`
  width: 80px;
  padding-top: 5px;
  padding-bottom: 5px;

  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #eaff61;
  scale: 1;
  transition: background-color 250ms linear;
  transition: scale 250ms linear;

  font-size: 12px;
  &:hover {
    background-color: red;
    scale: 1.1;
  }
`;
export const Username = styled.span`
  // width: 80px;
  // padding-top: 5px;
  // padding-bottom: 5px;
  background-color: #eaff61;
  border-radius: 4px;
  padding: 5px;
`;
