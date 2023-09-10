import * as S from "./style";
// trocar o nome depois para FilterTask.
// Essa função AddTask entra no modal direto.
export function AddTask() {
  return (
    <S.Container>
      <input type="text" placeholder="Digite sua pesquisa" />
      <div className="image">
        <button>Pesquisar</button>
      </div>
    </S.Container>
  );
}
