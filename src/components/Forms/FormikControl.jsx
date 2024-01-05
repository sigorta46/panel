import React from 'react' 
import CustomSelect from './CustomSelect'
import CustomInput from './CustomInput'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <CustomInput {...rest} /> 
    case 'select':
      return <CustomSelect {...rest} />   
    default:
      return null
  }
}

export default FormikControl