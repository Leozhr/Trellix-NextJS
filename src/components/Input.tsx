import styled from 'styled-components';

const InputStyle = styled.input`
  width: 100%;
  height: 6rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  border: 0.2rem solid ${({ theme }) => theme.colors.gray_300};
  outline: none;
  padding: 1.6rem 2.4rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_100};
  }

  &:focus {
    border: 0.2rem solid ${({ theme }) => theme.colors.primary};
  }
`

interface InputProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const Input = ({ placeholder, type, value, onChange, error }: InputProps) => {
  return (
    <InputStyle type={type}
    placeholder={placeholder} 
    value={value}
    onChange={onChange}
    style={{ borderColor: error ? '#ff3333' : '' }}
    />
  )
}

export { Input };

