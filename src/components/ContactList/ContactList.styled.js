import styled from 'styled-components';


const ListItem = styled.li`
  width: 300px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
  margin-bottom: 8px;
`;
const Span = styled.span`
  width: 100px;
`;
const NumberSpan = styled.span`
  width: 100px;
`;

const Button = styled.button`
  /* width: 60px; */
  border-radius: 20px;
  border: 1px solid grey;
  background-color: #f3f6f9;
  cursor: pointer;
  text-align: center;
  transition: all 0.8s;
  margin: 0 auto 0;

&:hover,
     &:focus {
     background-color: black;
     color: white;
   }
`;

export { ListItem, Button, Span, NumberSpan };