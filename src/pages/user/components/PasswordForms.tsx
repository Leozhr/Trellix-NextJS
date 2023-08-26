import { Button } from '@/components/Button';
import InputStyle from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { z } from 'zod';

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
    padding: 1rem 0;
    gap: 0.9rem;

    span {
      color: #ff3333;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: 500;
    }
  }
`

const passwordUserSchema = z.object({
  password: z.string().nonempty('Por favor, insira sua senha.')
  .min(6, 'A senha deve ter pelo menos 6 caracteres.')
  .max(20, 'A senha deve ter no máximo 20 caracteres.'),
  confirmPassword: z.string()
})

let comparePassword = true;

type PasswordUserForm = z.infer<typeof passwordUserSchema>

const PasswordForms = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PasswordUserForm>({
    resolver: zodResolver(passwordUserSchema)
  });

  const onSubmit = (data: any) => {
    if (data.password === data.confirmPassword) {
      console.log(data)
    }
  }

  return (
    <PasswordFormsStyle action='' onSubmit={handleSubmit(onSubmit)}>
      <InputStyle>
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

      <Button>Concluir Cadastro</Button>
    </PasswordFormsStyle>
  )
}

export { PasswordForms };

