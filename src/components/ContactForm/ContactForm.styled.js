import styled from 'styled-components';
import { Form, Field } from 'formik';


export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border: 1px solid #e4e9f0;
  padding: 20px;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
`;

export const Text = styled.p`
  margin: 0;
`;

export const ErrorText = styled.p`
  margin: 0;
  color: red;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 30px;
  font-size: 20px;
  border-radius: 60px;
  border: 1px solid #e4e9f0;
  padding-left: 8px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  background-color: #f3f6f9;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  margin: 0 auto;
  transition: all 0.8s;
  text-align: center;
  padding: 10px;


  &:hover,
     &:focus {
     background-color: black;
     color: white;
`;