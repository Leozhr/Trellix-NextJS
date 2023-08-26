'use client';
import { ButtonGoogle } from '@/components/ButtonGoogle';
import styled from 'styled-components';
import { LoginForms } from './components/login/LoginForms';

const LoginStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .login {
    background: ${({ theme }) => theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.gray_300};
    width: 600px;

    &-container {
      padding: 6rem 0;
      width: 70%;

      .info {
        margin-bottom: 4rem;
        text-align: center;

        h1 {
          font-size: ${({ theme }) => theme.fontSize.bigxl};
          font-weight: 700;
          margin-bottom: 1rem;
        }
      }
    }
  }

  .division {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_100};
    padding: 3rem 0;
    gap: 1rem;

    span {
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.gray_200};  
    }   
  }

  .register {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    padding-top: 3rem;

    span {
      color: ${({ theme }) => theme.colors.tertiary};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const Login = () => {
  return (
    <LoginStyle>
      <div className='login'>
        <div className='login-container'>
          <div className='info'>
            <h1>Trellix</h1>
          </div>
          
          <LoginForms />
   
          <div className='division'>
            <span />
            Ou, login com
            <span />
          </div>

          <ButtonGoogle>Continuar com o Google</ButtonGoogle>

          <div className='register'>
            <p>Ainda não tem uma conta? <span onClick={() => {}}>Registre Aqui</span></p>
          </div>
        </div>
      </div>
    </LoginStyle>
  )
}

export { Login };

