import styled from 'styled-components'

export const Container = styled.div`
  /* display: flex; */
  /* width: 100vw; */
  background-color: ${(props) => props.theme.colors.secondary};
  min-height: 100vh;
  /* justify-content: center; */
  /* margin-bottom: 16px; */
`

export const ContainerArea = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`

export const Header = styled.h1`
  display: flex;
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;
  justify-content: center;
  margin-top: -36px;
`

export const ContainerClear = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 2.7rem;
  border-top: 1px solid #fff;
  border-radius: 8px;

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
`
