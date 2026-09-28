import "./register.css"
import {type ChangeEvent, type FormEvent, useState} from "react";
import {$api} from "../../utils/api.ts";
import axios from "axios";

type RegisterForm = {
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    username: string
}

export const Register = () => {
    const [registerData, setRegisterData] = useState<RegisterForm>(
        {
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            username: ""
        }
    )

    const [error, setError] = useState<string>()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        })

    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const {data} = await $api.post("/register", registerData)
            console.log(data)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data.message)
            } else {
                console.log(error)
            }
        }


    }

    useEffect(() => {
        document.body.className = "auth"
        return () => {document.body.className=""}
    },[])

    return (

        <div className={"center container"}>
            <div className="form__container ">
                <div className="form__text">
                <h2>VetMessager</h2>
                <h3>Мы не отвечаем за слив ваших данных</h3></div>
                <form onSubmit={handleSubmit}>
                    <div >
                        <input  onChange={handleChange} value={registerData.email} name={"email"} type="text"
                               placeholder={"Введите никнейм"}/>
                        <input onChange={handleChange} value={registerData.first_name} name={"first_name"} type="text"
                               placeholder={"Введите электронную почту"}/>
                        <input onChange={handleChange} value={registerData.last_name} name={"last_name"} type="text"
                               placeholder={"Введите пароль"}/>
                        <input onChange={handleChange} value={registerData.password} name={"password"} type="text"
                               placeholder={"Введите имя"}/>
                        <input onChange={handleChange} value={registerData.username} name={"username"} type="text"
                               placeholder={"Введите фамилию"}/>
                    </div>

                    {error ? <p>{error}</p> : null}

                    <button className={"header__button"} type={"submit"}>Продолжить</button>
                </form>

                <p className="form__text">Нажимая продолжить, вы даете соглашение на отправку всех ваших данных в базу данных России</p>
            </div>
        </div>
    )
}