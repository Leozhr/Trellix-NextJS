import { Input } from '@/components/Input';
import styled from 'styled-components';

const LoginFormsStyle = styled.div`

`

const LoginForms = () => {
  return (
    <LoginFormsStyle>
      <Input placeholder='Email' type='email' />
    </LoginFormsStyle>
  )
}

export { LoginForms };

