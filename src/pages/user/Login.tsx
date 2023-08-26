'use client';
import Image from 'next/image';
import styled from 'styled-components';
import { LoginForms } from './components/login/LoginForms';

const LoginStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.secondary};
  }
`

const Login = () => {
  return (
    <LoginStyle>
      <div className='left'>
        <LoginForms />
      </div>
      <div className='right'>
        <Image src='/intro-art.svg' alt='login' width={550} height={566.6} />
      </div>
    </LoginStyle>
  )
}

export { Login };

