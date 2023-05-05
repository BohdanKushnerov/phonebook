import { styled } from '@mui/material/styles';
// import { InputBase } from '@mui/material';

export const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 16,

  width: 350,
  marginBottom: 50,
}));

// export const Input = styled(InputBase)(({ theme }) => ({
//   width: '100%',
//   boxSizing: 'border-box',
//   padding: '15px 16px',
//   border: '1px solid rgba(0, 0, 0, 0)',
//   borderRadius: '4px',
//   // backgroundColor: '#b6e7ba',
//   // backgroundColor: theme.palette.bcgInput.main,
//   fontSize: '18px',
//   '&:focus': {
//     outline: 'none',
//     border: '1px solid green',
//     backgroundColor: '#cdf1d0',
//   },
//   '&:-webkit-autofill': {
//     transition: 'background-color 600000s 0s, color 600000s 0s',
//   },
// }));

// export const Input = styled.input`
//   width: 100%;
//   box-sizing: border-box;
//   padding: 15px 16px;

//   border: 1px solid rgba(0, 0, 0, 0);
//   border-radius: 4px;
//   background-color: #b6e7ba;
//   font-size: 18px;
//   :focus {
//     outline: rgba(0, 0, 0, 0);
//     border: 1px solid green;
//     background-color: #cdf1d0;
//   }

//   :-webkit-autofill {
//     transition: background-color 600000s 0s, color 600000s 0s;
//   }
// `;

// export const Label = styled.label`
//   width: 100%;
//   font-weight: bold;
// `;

// export const Button = styled.button`
//   margin: 0 auto;
//   padding: 10px 24px;
//   min-width: 100px;

//   font-family: inherit;
//   font-weight: 700;
//   font-size: 16px;
//   border-radius: 4px;
//   border: none;
//   color: #ffffff;
//   background-color: #70bd7c;
//   cursor: pointer;

//   :active {
//     background-color: green;
//   }
// `;
