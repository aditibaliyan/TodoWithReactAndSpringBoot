import {useNavigate, useParams } from 'react-router-dom';
import {useAuth} from './security/AuthContext'
import { useEffect, useState } from 'react';
import {UpdateTodoApi, UpdateTodowithNewDataApi,CreateTodo} from './api/TodosApi'
import { Field, Formik,Form, ErrorMessage } from 'formik';
import moment from 'moment/moment';
 
export default function TodoComponent(){
    const authContext = useAuth()
    const username = authContext.username
    const {id } = useParams()
    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')
    const navigate= useNavigate()

    useEffect(
        () => retrieveTodo(),
        [id]
    )

    function retrieveTodo(){
        if(id!== -1){
          UpdateTodoApi(username, id)
          .then( (response) => {
          setDescription(response.data.description)
          setTargetDate(response.data.targetDate)
         })
         .catch( (error) => console.log(error))
        }
   }
   

   function onSubmit(values){

    const todo = {
        id: id,
        username: username,
        description: values.description,
        targetDate: values.targetDate,
        done: false,
      }

      if(id===-1){
        CreateTodo(username,todo)
        .then( (response) => {
            navigate("/todos")
           })
           .catch( (error) => console.log(error))
    
      }else{

    UpdateTodowithNewDataApi(username,id,todo)
    .then( (response) => {
        navigate("/todos")
       })
       .catch( (error) => console.log(error))
    }
   }

   function validate(values){
    
    let errors={
        // description: "enter atleast 5 chars",
        // targetDate: "enter a date"
    }
    if(values.description.length <5){
    errors.description="enter atleast 5 chars"
    }
    if(values.targetDate == '' || !moment(values.targetDate).isValid()){
        errors.targetDate="enter a date"
        }

     console.log(values)
     return errors
   }


   return(
    <div className='container'>
      <h1>Enter todo details</h1>
      <Formik initialValues={ {description, targetDate}}
       enableReinitialize= {true}
       onSubmit={onSubmit}
       validate={validate}
       validateOnBlur={false}
       validateOnChange={false}

       > 
        {
            (propes) =>(
                <Form>
                    <ErrorMessage
                        name="description"
                        component="div"
                        className='alert alert-warning'
                    />
                    <ErrorMessage
                        name="targetDate"
                        component="div"
                        className='alert alert-warning'
                    />
                    <fieldset className='form-group'>
                        <label>Description</label>
                        <Field type="text" className="form-control" name="description"></Field>
                    </fieldset>
                    <fieldset>
                        <label>Target Date</label>
                        <Field type="date" className="form-control" name="targetDate"></Field>
                    </fieldset>
                    <div>
                        <button className='btn btn-success m-5' type='submit'>save</button>
                    </div>
                </Form>
            )
        }
      </Formik>
    </div>
   )

}