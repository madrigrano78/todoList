import * as S from './style'
import { Item } from '../../types/Item'
import { TbTrash } from 'react-icons/tb'

type Props = {
  item: Item
  onDelete: (itemId: number) => void
  onComplete: (itemId: number) => void
}

export function ItemList({ item, onDelete, onComplete }: Props) {
  console.log(item)
  return (
    <>
      <S.Container done={item.done}>
        <S.AllItensContainer>
          <S.Round>
            <input
              type="checkbox"
              checked={item.done}
              id={`checkbox-${item.id}`}
              onChange={() => onComplete(item.id)}
            />
            <label htmlFor={`checkbox-${item.id}`}></label>
          </S.Round>
          <S.Content>
            <h1>{item.title}</h1>
            <S.ContainerLabel>
              <label>{item.description}</label>
            </S.ContainerLabel>
          </S.Content>
          <S.DeleteButton onClick={() => onDelete(item.id)}>
            <TbTrash size={20} />
          </S.DeleteButton>
        </S.AllItensContainer>
      </S.Container>
    </>
  )
}
