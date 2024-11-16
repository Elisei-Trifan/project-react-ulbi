import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../components/context'

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)

  function login(event) {
    event.preventDefault()
    setIsAuth(true)
  }

  return (
    <div>
      <h1>Страница для входа</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login
