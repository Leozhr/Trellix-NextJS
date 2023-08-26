import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import styled from 'styled-components';

const PasswordFormsStyle = styled.form`
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

const PasswordForms = () => {
  return (
    <PasswordFormsStyle action={''}>
      <div>
        <label htmlFor='password'>Senha <span>*</span></label>
        <Input placeholder='Digite sua senha' type='password' />
      </div>
  
      <div>
        <label htmlFor='password'>Confirme sua Senha <span>*</span></label>
        <Input placeholder='Digite sua senha novamente' type='password' />
      </div>

      <Button>Concluir Cadastro</Button>
    </PasswordFormsStyle>
  )
}

export { PasswordForms };

