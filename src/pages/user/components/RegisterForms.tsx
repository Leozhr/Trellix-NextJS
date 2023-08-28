import { Button } from '@/components/Button';
import InputStyle from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
    padding: 0.5rem 0;
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
  password: z.string().nonempty('Por favor, insira sua senha.')
  .min(6, 'A senha deve ter pelo menos 6 caracteres.')
  .max(20, 'A senha deve ter no máximo 20 caracteres.'),
  confirmPassword: z.string()
})

type CreateUserForm = z.infer<typeof registerUserSchema>

const RegisterForms = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserForm>({
    resolver: zodResolver(registerUserSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      const result = await response.json();
  
      if (!response.ok) {
        setError(result);
      } else {
        router.push(`/register/${result.id}`);
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <RegisterFormsStyle action='' onSubmit={handleSubmit(onSubmit)}>
      <InputStyle>
        <div>
          <label htmlFor='text'>Nome <span>*</span></label>
          <input placeholder='Digite seu nome' type='text' {...register('name')}
          style={errors.name && { borderColor: '#ff3333' }} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
    
        <div>
          <label htmlFor='email'>Email <span>*</span></label>
          <input placeholder='Digite seu email' type='email' {...register('email')}
          style={ errors.email || error ? { borderColor: '#ff3333' } : {} }
          onChange={e => setError('')} />
          {errors.email && <span>{errors.email.message}</span>}
          {error && <span>{error}</span>}
        </div>

        <div>
          <label htmlFor='password'>Senha <span>*</span></label>
          <input placeholder='Digite sua senha' type='password' {...register('password')}
          style={errors.password && { borderColor: '#ff3333' }} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
    
        <div>
          <label htmlFor='confirmPassword'>Confirme sua Senha <span>*</span></label>
          <input placeholder='Digite sua senha novamente' type='password' {...register('confirmPassword')} />
        </div>
      </InputStyle> 
      
      <Button>Continuar</Button>
    </RegisterFormsStyle>
  )
}

export { RegisterForms };

