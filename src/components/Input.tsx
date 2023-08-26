import styled from 'styled-components';

const InputStyle = styled.div`
  input {
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
  }
`

export default InputStyle;