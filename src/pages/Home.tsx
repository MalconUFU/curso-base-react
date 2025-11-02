import { useEffect, useState } from "react";
import { List } from "../components/List";
import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI";
import { InputAdd } from "../components/InputAdd";
import { TodoItem } from "../components/TodoItem";

export const Home = () => {

  const [list, setList] = useState<ITodo[]>([])

  useEffect( () => {
    TodoAPI.getAll().then(data => setList(data));
   }, []);

  const handleAdd = (value: string) => {
    TodoAPI.create({ label: value, complete: false })
      .then(data => setList([...list, data]))
  }

  const handleComplete = (id: string) => {
    TodoAPI.updateById(id, {complete: true})
      .then(() => setList([...list.map(item => ({ ...item, complete: item.id === id ? true : item.complete }))]))
  }

  const handleRemove = (id: string) => {
    TodoAPI.deleteById(id)
      .then(() => setList([...list.filter(item => item.id !=  id)]))
  }

  return (
    <>

      <InputAdd onAdd={handleAdd} />

      <List>
        {/*GERAR A LISTA*/}
        {list.map((listItem) => (

          <TodoItem

            key={listItem.id}

            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}

            onComplete={ () => handleComplete(listItem.id) }
            onRemove={ () => handleRemove(listItem.id) }
          />
        ))}
      </List>
    </>
  )
}