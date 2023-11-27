import styled from "styled-components";


export const CustomButton = styled.button`
background-color:#0095f6;
color: #fff;
border-radius: 8px;
padding:7px 16px;
border:none;

    &hover:{
        background-color: #1877f2
    }
`
export const FullWidthButton = styled(CustomButton)`

width :100%;

`