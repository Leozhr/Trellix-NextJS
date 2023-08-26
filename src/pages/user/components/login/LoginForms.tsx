import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import styled from 'styled-components';

const LoginFormsStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  p {
    color: ${({ theme }) => theme.colors.primary};
    text-align: end;
    font-size: ${({ theme }) => theme.fontSize.sm};
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  label {
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 600;

    span {
      color: #ff3333;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }
`

const LoginForms = () => {
  return (
    <LoginFormsStyle action={''}>
      <div>
        <label htmlFor='email'>Email <span>*</span></label>
        <Input placeholder='Digite o seu Email' type='email' />
      </div>
  
      <div>
        <label htmlFor='password'>Senha <span>*</span></label>
        <Input placeholder='Digite sua senha' type='password' />
        <p>Esqueceu sua senha ?</p>
      </div>

      <Button>Login In</Button>
    </LoginFormsStyle>
  )
}

export { LoginForms };

