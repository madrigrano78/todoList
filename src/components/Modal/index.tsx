import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import Modal from "react-modal";
import * as S from "./style";

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
      <S.ButtonCreate onClick={openModal}>
        Criar {<IoMdAddCircleOutline size={20} />}
      </S.ButtonCreate>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <S.ModalContainer>
          <S.TitleModal>Digite sua Tarefa</S.TitleModal>
          <form>
            <S.ContainerInput>
              <S.TitleInput
                type="text"
                placeholder="Título"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <S.DescriptionInput
                placeholder="Descrição"
                value={inputTextArea}
                onChange={(e) => setInputTextArea(e.target.value)}
              />
            </S.ContainerInput>
          </form>
          <S.ButtonContainer>
            <S.ButtonCreateTask
              onClick={() => {
                onCreate(inputText, inputTextArea);
              }}
            >
              Criar
            </S.ButtonCreateTask>
            <S.ButtonCloseModal onClick={closeModal}>
              Cancelar
            </S.ButtonCloseModal>
          </S.ButtonContainer>
        </S.ModalContainer>
      </Modal>
      {/* </Content> */}
    </>
  );
}
