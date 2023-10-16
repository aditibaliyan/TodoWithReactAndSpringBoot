import { ApiClient } from "./ApiClient"

export const retrieveTodosForUsernameApi = 
       (username) => ApiClient.get(`/users/${username}/todos`)
       //http://localhost:8080/users/in28minutes/todos

export const DeleteTodoApi=
(username, id) => ApiClient.delete(`/users/${username}/todos/${id}`)

export const UpdateTodoApi=
(username, id) => ApiClient.get(`/users/${username}/todos/${id}`)

export const UpdateTodowithNewDataApi=
(username, id, todo) => ApiClient.put(`/users/${username}/todos/${id}`, todo)

export const CreateTodo=
(username, todo) => ApiClient.put(`/users/${username}/todos`, todo)
