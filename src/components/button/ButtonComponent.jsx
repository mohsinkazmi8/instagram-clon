import React from 'react'
import { CustomButton } from './buttonStyle'


export const ButtonClassType ={
    regular: 'regular',
    fullWidth: 'full-widht'
}

const ButtonType = (ButtonType = ButtonClassType.regular) =>{
    [ButtonClassType.regular]:
}

const ButtonComponent = ({type,children,buttonFormate}) => {
  return (
    <>
      <CustomButton type={type}>
        {children}
      </CustomButton>
    </>
  )
}

export default ButtonComponent
