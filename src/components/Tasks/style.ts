import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;

  div {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 14px;
    color: #fff;
    margin-left: 4px;
    background: #262626;
    border: 1px solid #333333;
    padding: 2px 8px 2px 8px;
    border-radius: 999px;
  }

  p {
    font-size: 18px;
    /* font-weight: bold; */
    color: ${(props) => props.theme.colors.textColor};
  }
`
