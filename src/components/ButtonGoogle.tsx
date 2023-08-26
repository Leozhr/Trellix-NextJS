import Image from 'next/image';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: none;
  height: 6rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.secondary};
  border: 0.2rem solid ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.gray_200};
  }
`

interface ButtonProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ButtonGoogle = ({ children, style }: ButtonProps) => {
  return (
    <ButtonStyle style={style}>
      <Image src='/google-logo.svg' alt='google' width={24} height={24} />
      {children}
    </ButtonStyle>
  )
}

export { ButtonGoogle };

