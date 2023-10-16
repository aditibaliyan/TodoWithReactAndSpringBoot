import { useEffect, useState } from 'react'
import {retrieveTodosForUsernameApi, DeleteTodoApi} from './api/TodosApi'
import { useAuth } from './security/AuthContext'
import {useNavigate } from 'react-router-dom';

function ListTodosComponent(){
    const today = new Date()
    const todayDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    const [todos, setTodos]= useState([])
    const [message, setMessage] = useState(null)
    const authContext= useAuth()
    const username= authContext.username
    const navigate= useNavigate()
    // const todos =[
    //     // {id: 1, description: 'Learn AWS', done:false, targetDate: todayDate},
    //     // {id: 2, description: 'Learn Spring', done:false, targetDate: todayDate},
    //     // {id: 3, description: 'Learn Devops', done:false, targetDate: todayDate},
    // ]
    useEffect(
      () => {
        refreshTools()
      }, []
    ) 
    
 function refreshTools(){
    retrieveTodosForUsernameApi(username)
         .then( (response) => {
          setTodos(response.data)
          console.log(response)
         })
         .catch( (error) => console.log(error))
        }

        function DeleteTodo(id){
          DeleteTodoApi(username, id)
          .then(
            () => {refreshTools()
                   setMessage(`id: ${id} has been deleted`)
        })
          .catch( (error) => console.log(error))
        }

        function UpdateTodo(id){
          navigate(`/todo/${id}`)
           console.log('call update' +id)
        }

        function CreateTodo(){
          navigate(`/todo/-1`)
        }
         
    return (
        <div className="container">
          {message && <div>{message}</div>}
        <h1>Things you want to do</h1>
        <div>
           <table className='table'>
            <thead>
              <tr>
                <th>description</th>
                <th>is Done</th>
                <th>target Date</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
            {
            todos.map(todo => (
             <tr key={todo.id}>
               <td>{todo.description}</td> 
               <td>{todo.done.toString()}</td>
               <td>{todo.targetDate.toString()}</td>
               <td><button className='btn  btn-warning' onClick={() => DeleteTodo(todo.id)}>Delete</button></td>
               <td><button className='btn  btn-success' onClick={() => UpdateTodo(todo.id)}>Update</button></td>
             </tr>
            ))
            }
              
            </tbody>
           </table>
        </div>
        <div className='btn btn-success' m-5 onClick={CreateTodo}>Add New Todo</div>
        </div>
    )
}

export default ListTodosComponent