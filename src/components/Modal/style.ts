import styled from "styled-components";

// export const Content = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   background-color: ${(props) => props.theme.colors.secondary};
//   justify-content: center;
// `;

export const ButtonCreate = styled.button`
  display: flex;
  width: 90px;
  height: 52px;
  border-radius: 8px;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.textColor};
  color: white;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const ModalContainer = styled.div``;

export const TitleModal = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 10px;
`;

export const ButtonCreateTask = styled.button`
  width: 6.5rem;
  height: 2.5rem;
  border-radius: 8px;
  font-weight: bold;
  color: white;
  background-color: #1e9f4a;
  border: none;
  margin-right: 16px;
  cursor: pointer;
`;

export const ButtonCloseModal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.5rem;
  height: 2.5rem;
  border-radius: 8px;
  font-weight: bold;
  color: white;
  background-color: red;
  border: none;
  cursor: pointer;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const TitleInput = styled.input`
  width: 28.8rem;
  height: 3.5rem;
  border: 1px;
  border-radius: 8px;
  padding: 16px;
`;

export const DescriptionInput = styled.textarea`
  width: 28.8rem;
  height: 17.1rem;
  border: 1px;
  border-radius: 8px;
  padding: 16px;
  margin-top: 10px;
`;
