import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import styled from 'styled-components';

const RegisterFormsStyle = styled.form`
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

const RegisterForms = () => {
  return (
    <RegisterFormsStyle>
      <div>
        <label htmlFor='text'>Nome <span>*</span></label>
        <Input placeholder='Digite seu nome' type='text' />
      </div>
  
      <div>
        <label htmlFor='email'>Email <span>*</span></label>
        <Input placeholder='Digite seu email' type='email' />
      </div>   
      <Button>Continuar</Button>
    </RegisterFormsStyle>
  )
}

export { RegisterForms };

