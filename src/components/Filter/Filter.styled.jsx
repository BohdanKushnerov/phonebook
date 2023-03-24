import styled from '@emotion/styled';

export const FilterInput = styled.input`
  padding: 15px 16px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
  background-color: #b6e7ba;
  :focus {
    outline: rgba(0, 0, 0, 0);
    border: 1px solid green;
    background-color: #cdf1d0;
  }

  :-webkit-autofill {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  gap: 16px;
  align-items: center;

  font-weight: bold;
`;
