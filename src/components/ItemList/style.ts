import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
  display: flex;
  background-color: #262626;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  align-items: center;

  h1 {
    color: #fff;
    text-decoration: ${done ? "line-through" : "initial"};
  }

  input {
    width: 25px;
    height: 25px;
    margin-right: 8px;
    background-color: ${(props) => props.theme.colors.textColor};
    margin-bottom: 3px;
  }

  label {
    color: #fff;
    font-size: 20px;
    text-decoration: ${done ? "line-through" : "initial"};
  }
`
);
