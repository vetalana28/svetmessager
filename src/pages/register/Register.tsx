import "./register.css"
import {type ChangeEvent, useState} from "react";



export const Register = () => {
    const [data, setData] = useState(
        {
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            username: ""
        }
    )

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    return (
        <div className={"center container"}>
            <div className="form__container ">
                <h2>VetMessager</h2>
                <h3>Мы не отвечаем за слив ваших данных</h3>
                <form>
                    <div>
                        <input onChange={handleChange} value={data.email} name={"email"} type="text" placeholder={"Введите никнейм"}/>
                        <input onChange={handleChange} value={data.first_name} name={"first_name"} type="text" placeholder={"Введите электронную почту"}/>
                        <input onChange={handleChange} value={data.last_name} name={"last_name"} type="text" placeholder={"Введите пароль"}/>
                        <input onChange={handleChange} value={data.password} name={"password"} type="text" placeholder={"Введите имя"}/>
                        <input onChange={handleChange} value={data.username} name={"username"} type="text" placeholder={"Введите фамилию"}/>
                    </div>
                    <button type={"submit"}>Продолжить</button>
                </form>

                <p>Нажимая продолжить, вы даете соглашение на отправку всех ваших данных в базу данных России</p>
            </div>
        </div>
    )
}