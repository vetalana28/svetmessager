import {type ChangeEvent, type FormEvent, useState} from 'react'
import {$api} from "../../utils/api.ts";

type LoginForm = {
  email: string,
  password: string,
}

export const Login = () => {
  const [loginData, setLoginData] = useState<LoginForm>({
    email: "",
    password: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target
    setLoginData({
      ...loginData,
      [name]: value
    })
    console.log(loginData)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const {data} = await $api.post("/login", loginData)
    console.log(data)

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={loginData.email}
               name={"email"}/>
        <input type="text" name={"password"} onChange={handleChange} value={loginData.password}/>
        <button type={"submit"}>login</button>
      </form>
    </div>
  )
}
