import * as S from "./style";
import { Item } from "../../types/Item";
import { useState } from "react";

type Props = {
  item: Item;
};

export function ItemList({ item }: Props) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <S.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <h1>{item.title}</h1>
      <label>{item.description}</label>
    </S.Container>
  );
}
