'use client';
import { BoxContent } from '@/templates/Box';
import styled from 'styled-components';
import { PasswordForms } from './components/PasswordForms';

const PasswordStyle = styled.div`
  padding: 6rem 0;
  width: 70%;

  .info {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.bigxl};
      font-weight: 700;
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.colors.tertiary};
      font-weight: 500;
      padding: 1.2rem 0 3rem 0;
    }
  }
`

const Password = () => {
  return (
    <BoxContent> 
      <PasswordStyle>
        <div className='info'>
          <h1>Nova Senha</h1>
          <p>Bem-vindo ao nosso mundo de possibilidades personalizadas! Ao se registrar agora, 
             você estará prestes a desbloquear uma experiência feita especialmente para você. Digite sua senha abaixo</p>
        </div>
        <PasswordForms />
      </PasswordStyle>
    </BoxContent>
  )
}

export { Password };

