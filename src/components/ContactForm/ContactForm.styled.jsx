import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 200px;
`;

export const Button = styled.button`
  padding: 10px 24px;
  min-width: 100px;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: #70bd7c;
  cursor: pointer;

  :active {
    background-color: green;
  }
`;

export const Input = styled.input`
  padding: 15px 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
  margin-bottom: 20px;
  /* max-width: 450px; */
  width: 100%;
  background-color: #b6e7ba;

  :-webkit-autofill {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;
