import { Children, useState } from 'react'
import './TodoApp.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import TodoComponent from './TodoComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'

function AuthenticatedRoute({children}){
  const authContext = useAuth()
  if(authContext.isAuthenticated){
   return children
  }
  return <Navigate to="/" />
}

export default function TodoApp() {
  return (
    <div>
        <AuthProvider>
        <BrowserRouter>
        <HeaderComponent />
           <Routes>
             <Route path='/' element={<LoginComponent />}/>
             <Route path='/login' element={<LoginComponent />}/>
             <Route path='/welcome/:username' element={
             <AuthenticatedRoute>
                <WelcomeComponent />
             </AuthenticatedRoute>
             }/>
             <Route path='*' element={<ErrorComponent />}/>
             <Route path='/todos' element={
              <AuthenticatedRoute>
                <ListTodosComponent />
             </AuthenticatedRoute>
             }/>

             <Route path='/todo/:id' element={
              <AuthenticatedRoute>
                <TodoComponent />
             </AuthenticatedRoute>
             }/>
             
             <Route path='/logout' element={
              <AuthenticatedRoute>
                 <LogoutComponent />
              </AuthenticatedRoute>
               }/>
           </Routes>
        </BrowserRouter>
        </AuthProvider>
    </div>
  )
}


