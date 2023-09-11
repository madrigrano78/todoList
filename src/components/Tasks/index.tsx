import * as S from "./style";

type Task = {
  id: number;
  title: string;
  description: string;
  done: boolean;
};

type Props = {
  list: Task[];
};

export function Tasks({ list }: Props) {
  const taskQuantity = list.length;
  const completedTasks = Array.isArray(list)
    ? list.filter((item) => item.done).length
    : 0;

  return (
    <>
      <S.Content>
        <div>
          <p>Tarefas Criadas</p>
          <span>{taskQuantity}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>
            {completedTasks} de {taskQuantity}
          </span>
        </div>
      </S.Content>
    </>
  );
}
