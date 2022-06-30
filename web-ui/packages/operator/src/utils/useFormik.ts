import React from 'react'
import { FormikConfig, useFormik } from 'formik'

const useFormikWrap = <T>(props: FormikConfig<T>) => {
  const formik = useFormik({
    ...props,
    enableReinitialize: true,
    validateOnMount: false
  })

  return {
    ...formik,
    handleChange: (e: React.ChangeEvent<any>) => {
      formik.setFieldTouched(e.target.name)
      formik.handleChange(e)
    }
  }
}

export default useFormikWrap
