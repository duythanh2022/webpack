import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { object, string } from 'yup'
import { useAuthContext, User } from '@/customer/contexts/AuthContext'
import useFormikWrap from '@/customer/utils/useFormik'
import { LocationState } from './domain'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { signin } = useAuthContext()
  const { t } = useTranslation(['auth'])
  const from = (location.state as LocationState)?.from?.pathname || '/'

  const { handleChange, handleSubmit, errors, touched } = useFormikWrap<User>({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: object({
      username: string().required(`${t('login.validation.username')}`),
      password: string()
        .required(`${t('login.validation.password')}`)
        .min(8, `${t('login.validation.passwordLength')}`)
    }),
    onSubmit: (value: any) => {
      signin(value, () => navigate(from, { replace: true }))
    }
  })

  return (
    <div>
      <form>
        <TextField
          placeholder={`${t('login.username')}`}
          name='username'
          onChange={handleChange}
          type='text'
          error={touched.username && !!errors.username}
          helperText={touched.username && errors.username}
        />
        <TextField
          placeholder={`${t('login.password')}`}
          name='password'
          onChange={handleChange}
          type='password'
          error={touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />
        <Button onClick={() => handleSubmit()}>{`${t('login.title')}`}</Button>
      </form>
    </div>
  )
}

export default Login
