'use client';
import { BoxContent } from '@/components/templates/Box';
import styled from 'styled-components';
import { RegisterForms } from './components/register/RegisterForms';

const RegisterStyle = styled.div`
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

const Register = () => {
  return (
    <BoxContent> 
      <RegisterStyle>
        <div className='info'>
          <h1>Registre-se</h1>
          <p>Registre-se agora e tenha acesso a recursos personalizados, 
             recomendações sob medida e um perfil único que reflete seus interesses.</p>
        </div>

        <RegisterForms />
      </RegisterStyle>
    </BoxContent>
  )
}

export { Register };

