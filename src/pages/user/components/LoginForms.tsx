'use client';
import { Button } from '@/components/Button';
import InputStyle from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { z } from 'zod';

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
    padding: 1rem 0;
    gap: 0.9rem;

    span {
      color: #ff3333;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: 500;
    }
  }
`

const loginUserSchema = z.object({
  email: z.string().nonempty('Por favor, insira seu endereço de email.')
          .email('O email fornecido não é válido. Verifique e tente novamente.'),
  password: z.string().nonempty('Por favor, insira sua senha.')
})

type CreateUserForm = z.infer<typeof loginUserSchema>

const LoginForms = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserForm>({
    resolver: zodResolver(loginUserSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <LoginFormsStyle action='' onSubmit={handleSubmit(onSubmit)}>
      <InputStyle>
        <div>
          <label htmlFor=''>Email <span>*</span></label>
          <input placeholder='Digite o seu Email' type='email' {...register('email')}
          style={errors.email && { borderColor: '#ff3333' }}/>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
    
        <div>
          <label htmlFor=''>Senha <span>*</span></label>
          <input placeholder='Digite sua senha' type='password' {...register('password')}
          style={errors.password && { borderColor: '#ff3333' }} />
          {errors.password && <span>{errors.password.message}</span>}
          <p>Esqueceu sua senha ?</p>
        </div>
      </InputStyle>

      <Button type='submit'>Login In</Button>
    </LoginFormsStyle>
  )
}

export { LoginForms };

