import styled from 'styled-components';

const BoxStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .container {
    background: ${({ theme }) => theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.gray_300};
    width: 600px;
  }
`

const BoxContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <BoxStyle>
      <div className='container'>
        {children}
      </div>
    </BoxStyle>
  )
}

export { BoxContent };

