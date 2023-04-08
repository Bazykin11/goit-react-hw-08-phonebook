import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const Btn = styled.button`
  width: 40px;
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
