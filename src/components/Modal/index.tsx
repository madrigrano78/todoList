import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import Modal from "react-modal";
import {
  ButtonCloseModal,
  ButtonCreate,
  ButtonCreateTask,
  ButtonContainer,
  ContainerInput,
  DescriptionInput,
  ModalContainer,
  TitleInput,
  TitleModal,
} from "./style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#262626",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    maxWidth: 500,
    padding: 10,
    borderRadius: 8,
  },
};

Modal.setAppElement("#root");

type Props = {
  onCreate: (taskTitle: string, taskDescription: string) => void;
};

export function ModalToDo({ onCreate }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputTextArea, setInputTextArea] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {/* <Content> */}
      <ButtonCreate onClick={openModal}>
        Criar {<IoMdAddCircleOutline />}
      </ButtonCreate>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalContainer>
          <TitleModal>Digite sua Tarefa</TitleModal>
          <form>
            <ContainerInput>
              <TitleInput
                type="text"
                placeholder="Título"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <DescriptionInput
                placeholder="Descrição"
                value={inputTextArea}
                onChange={(e) => setInputTextArea(e.target.value)}
              />
            </ContainerInput>
          </form>
          <ButtonContainer>
            <ButtonCreateTask
              onClick={() => {
                onCreate(inputText);
              }}
            >
              Criar
            </ButtonCreateTask>
            <ButtonCloseModal onClick={closeModal}>Cancelar</ButtonCloseModal>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
      {/* </Content> */}
    </>
  );
}
