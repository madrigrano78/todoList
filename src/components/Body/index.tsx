import { ModalToDo } from "../Modal";
import * as S from "./style";
import { Item } from "../../types/item";
import { useState } from "react";
import { ItemList } from "../ItemList";
import { AddTask } from "../AddTask";

export function Body() {
  const [list, setList] = useState<Item[]>([
    { id: 1, title: "Padaria", description: "comprar o pão", done: false },
    { id: 2, title: "PetShop", description: "comprar ração", done: false },
  ]);

  const handleAddTask = (taskTitle: string, taskDescription: string) => {
    const newList = [...list];
    newList.push({
      id: list.length + 1,
      title: taskTitle,
      description: taskDescription,
      done: false,
    });
    setList(newList);
  };

  return (
    <>
      <S.Container>
        <S.ContainerArea>
          <S.Header>
            <ModalToDo onCreate={handleAddTask} />
          </S.Header>

          <AddTask />

          {list.map((item, index) => (
            <ItemList key={index} item={item} />
          ))}
        </S.ContainerArea>
      </S.Container>
    </>
  );
}
