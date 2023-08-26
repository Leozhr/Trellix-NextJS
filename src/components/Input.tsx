import styled from 'styled-components';

const InputStyle = styled.input`

`

interface InputProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, type, value, onChange }: InputProps) => {
  return (
    <InputStyle type={type}
    placeholder={placeholder} 
    value={value}
    onChange={onChange}
    />
  )
}

export { Input };

