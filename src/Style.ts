import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    vertical-align: center;
    margin-bottom: 30px;
`

export const Input = styled.input`
    padding: 10px 5px;
    border-radius: 5px 0 0 5px;
    font-size: 14px;
    width: 250px;
    border: 1px solid gray;
    border-right: none;
`

export const Submit = styled.input`
    padding: 7.5px 5px;
    border-radius: 0 5px 5px 0;
    font-size: 14px;
    width: 50px;
    border: none;
    background-color: skyblue;
    color: white;
`