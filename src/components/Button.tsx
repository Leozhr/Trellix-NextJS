import styled from 'styled-components';

const ButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  height: 6rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;
  transition: all 0.2s;
  margin: 1rem 0 0;

  &:hover {
    background: ${({ theme }) => theme.colors.hidden};
  }
`

interface ButtonProps {
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ children, style, type, onClick }: ButtonProps) => {
  return (
    <ButtonStyle style={style} type={type} onClick={onClick}>
      {children}
    </ButtonStyle>
  )
}

export { Button };

