import { useAppSelector } from '../store'

export function TodoList() {
  const todoStore = useAppSelector((store) => {
    return store.todo
  })

  return (
    <ul>
      {todoStore.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  )
}
