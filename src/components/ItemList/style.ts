import styled from 'styled-components'

type ContainerProps = {
  done: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: #262626;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  align-items: center;
  margin-top: 20px;
  border: 1px solid gray;

  h1 {
    color: #fff;
    text-decoration: ${(props) => (props.done ? 'line-through' : 'initial')};
  }

  label {
    color: #fff;
    font-size: 16px;
    text-decoration: ${(props) => (props.done ? 'line-through' : 'initial')};
  }
`

// export const LabelDescription = styled.label<ContainerProps>`

// `

export const ContainerLabel = styled.div`
  word-wrap: break-word;
  max-width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -8px;
  margin-left: 24px;
`

export const DeleteButton = styled.button`
  display: flex;
  justify-content: end;
  background: none;
  border: none;
  color: #808080;
  cursor: pointer;
  margin-bottom: 54px;
`

export const AllItensContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 16px;
`

export const Round = styled.div`
  position: relative;
  overflow-x: initial;

  label {
    background-color: #262626;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    top: 0;
    width: 28px;
    border-color: ${(props) => props.theme.colors.textColor};
  }

  label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: '';
    height: 6px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }

  input[type='checkbox'] {
    visibility: hidden;
  }

  input[type='checkbox']:checked + label {
    background-color: ${(props) => props.theme.colors.textColor};
  }

  input[type='checkbox']:checked + label:after {
    opacity: 1;
  }
`
