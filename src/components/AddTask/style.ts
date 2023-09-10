import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #262626;

  .image {
    margin-right: 5px;
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }

  button {
    width: 90px;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.textColor};
    color: white;
    text-align: center;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`;
