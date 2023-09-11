import { ModalToDo } from '../Modal'
import * as S from './style'
import { Item } from '../../types/Item'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList'
import { TiClipboard } from 'react-icons/ti'
import { Tasks } from '../Tasks'

const LOCAL_STORAGE_KEY = 'todo:list'

export function Body() {
  const [list, setList] = useState<Item[]>([])

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      setList(JSON.parse(saved))
    }
  }

  function setTasksAndSave(newTasks: Item[]) {
    setList(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  const handleAddTask = (taskTitle: string, taskDescription: string) => {
    const newList = [...list]
    newList.push({
      id: list.length + 1,
      title: taskTitle,
      description: taskDescription,
      done: false,
    })
    setList(newList)
  }

  function toggleTaskCompletedById(itemId: number) {
    const newTasks = list.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          done: !item.done,
        }
      }
      return item
    })
    setList(newTasks)
  }

  const handleDeleteTask = (itemId: number) => {
    const newTask = list.filter((item) => item.id !== itemId)
    setTasksAndSave(newTask)
  }

  // console.log(list, "aquilista");

  return (
    <>
      <S.Container>
        <S.ContainerArea>
          <S.Header>
            <ModalToDo onCreate={handleAddTask} />
          </S.Header>

          <Tasks list={list} />

          {/* <SearchTask /> */}
          {list.length ? (
            list.map((item, index) => (
              <ItemList
                key={index}
                item={item}
                onDelete={handleDeleteTask}
                onComplete={toggleTaskCompletedById}
              />
            ))
          ) : (
            <S.ContainerClear>
              <TiClipboard size={80} color={'#fff'} style={{ marginTop: '64px' }} />
              <h1>Você não tem tarefas cadastradas</h1>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </S.ContainerClear>
          )}
        </S.ContainerArea>
      </S.Container>
    </>
  )
}
