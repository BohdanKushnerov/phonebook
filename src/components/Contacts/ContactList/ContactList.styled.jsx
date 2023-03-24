import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 300px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  border: 1px solid black;
  border-radius: 4px;
`;

export const ContactButton = styled.button`
  padding: 5px;
  min-width: 50px;
  font-family: inherit;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: #70bd7c;
  cursor: pointer;
  :active {
    background-color: green;
  }
`;
