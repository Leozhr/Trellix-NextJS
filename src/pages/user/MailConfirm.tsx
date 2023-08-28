import { Button } from '@/components/Button';
import { BoxContent } from '@/templates/Box';
import styled from 'styled-components';

const MailConfirmStyle = styled.div`
  padding: 6rem 0;
  width: 80%;

  .info {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.bigxl};
      font-weight: 700;
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.colors.tertiary};
      font-weight: 500;
      padding: 1.2rem 0 5rem 0;
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      line-height: 2rem;
      padding: 1.2rem 0 3rem 0;
    }
  }
`

const MailConfirm = () => {
  return (
    <BoxContent> 
      <MailConfirmStyle>
        <div className='info'>
          <h1>Confirme seu Email</h1>
          <p>Agradecemos por se registrar em nossa plataforma! 
             Para concluir o processo de registro e garantir a segurança da sua conta, pedimos que você confirme seu endereço de email.</p>
          <span>Se você não recebeu o email de confirmação, clique aqui para reenviar.</span>
        </div>

        <Button style={{ width: '100%', margin: '3rem 0 0' }}>Reenviar Email</Button>
      </MailConfirmStyle>
    </BoxContent>
  )
}


export { MailConfirm };

