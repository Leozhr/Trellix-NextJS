import { Button } from '@/components/Button';
import InputStyle from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { z } from 'zod';

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
    padding: 1rem 0;
    gap: 0.9rem;

    span {
      color: #ff3333;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: 500;
    }
  }
`

const registerUserSchema = z.object({
  name: z.string().nonempty('Por favor, insira seu nome')
  .min(5, 'O nome deve ter pelo menos 5 caracteres')
  .max(15, 'O nome deve ter no máximo 15 caracteres'),
  email: z.string().nonempty('Por favor, insira seu endereço de email.')
  .email('O email fornecido não é válido. Verifique e tente novamente.'),
})

type CreateUserForm = z.infer<typeof registerUserSchema>

const RegisterForms = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserForm>({
    resolver: zodResolver(registerUserSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <RegisterFormsStyle action='' onSubmit={handleSubmit(onSubmit)}>
      <InputStyle>
        <div>
          <label htmlFor='text'>Nome <span>*</span></label>
          <input placeholder='Digite seu nome' type='text' {...register('name')}
          style={errors.email && { borderColor: '#ff3333' }} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
    
        <div>
          <label htmlFor='email'>Email <span>*</span></label>
          <input placeholder='Digite seu email' type='email' {...register('email')}
          style={errors.email && { borderColor: '#ff3333' }} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>  
      </InputStyle> 
      
      <Button>Continuar</Button>
    </RegisterFormsStyle>
  )
}

export { RegisterForms };

