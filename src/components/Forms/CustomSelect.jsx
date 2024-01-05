import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from '../TextError';
import Select from "react-select";

export default function CustomSelect(props) {
  // const { name, options, type, value, className, ...rest } = props

  const { options, isLabel, name, placeholder, defaultValue, className, ...rest } = props

  return (
    <div>
      <Field name={name}>
        {({ form }) => {
          const { setFieldValue } = form
          return (
            <Select isSearchable placeholder={placeholder} defaultValue={
              options.filter(obj => obj.label === defaultValue)}
              options={options} name={name} onChange={(value) => setFieldValue(name, isLabel ? value.label : value.value)} {...rest} className={className}
            />
          )
        }}
      </Field>
      {/* <Select isSearchable placeholder={placeholder}  defaultValue={
       options.filter(obj =>obj.label === defaultValue)}
        options={options} name={name} onChange={onChange} {...rest} className={className}
      /> */}
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}
