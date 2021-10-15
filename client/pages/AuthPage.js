import { useState } from "react"
import { useHttp } from "../hooks/http.hook"

export const AuthPage = () => {
useHttp()
const [from, setForm] = useState({
        email: '', password: ''
})

const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value })
} 

   
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи Ссылку</h1>
                <div class="card blue darken-1">
        <div className="card-content white-text">
          <span className="card-title">Авторизация</span>
    <div>
    <div className="input-field">
          <input placeholder="Введите email" 
          id="email" 
          type="text" 
          className="yellow-input"
          name="email"
          onChange={changeHandler}
          />
          <label forFor="email">Введите email</label>
        </div>

        <div className="input-field">
          <input placeholder="Введите пароль" 
          id="password" 
          type="password" 
          className="yellow-input"
          name="password"
          onChange={changeHandler}

          />
          <label forFor="email">Пароль</label>
        </div>
    </div>
        </div>
        <div className="card-action">
         <button className="btn yellow darken-4" style={{marginRight: 10}}>Войти</button>
         <button className="btn grey lighten-1 black-text">Регистрация</button>
        </div>
      </div>
            </div>
        </div>
    )
}
