import { useEffect } from 'react';

import card1 from '../../assets/images/card1.svg';
import card2 from '../../assets/images/card2.svg';
import card3 from '../../assets/images/card3.svg';
import card4 from '../../assets/images/card4.svg';
import card5 from '../../assets/images/card5.svg';
import weatherLine from '../../assets/images/weatherLine.svg';
import weatherIcon from '../../assets/images/WeatherIcon.svg';
import mainBtn from '../../assets/images/main-btn.svg';

import "./home.css"

export const Home = () => {
    useEffect(() => {
        const cards = [...document.querySelectorAll(".card__container")];


        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target)
                    const index = cards.indexOf(entry.target);
                    console.log(index, 'index')
                    setTimeout(() => {

                        entry.target.classList.add("is-visible");
                    }, index * 300);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        cards.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return <main>
        <section className="hero__container container">
            <div className="hero__text">
                <h1>Извинитесь...</h1>
                <p>Приложение не доступно в вашем регионе((</p>
                <p> Попробуйте включить впн</p>
            </div>

            <div className="hero__weather-btn__container">
                <a className="hero__weather-btn" href="">
                    <p>Погода в Нижнекамске на каждый день</p>
                    <img src={weatherLine} alt=""/>
                    <img src={weatherIcon} alt=""/>
                </a>
            </div>

            <a href="" className="hero__btn header__button">
                <p>Чатица ура!!</p> <img src={mainBtn} alt=""/>
            </a>
        </section>


        <section className="container">
            <div className="card__wrapper">

                <div className="card__container">
                    <a className="card " href="">
                        <img alt="" src={card1}/>
                        <p>Чат будет?</p>
                        <p className="card-desc">Пожалуйста</p>
                    </a>
                </div>
                <div className="card__container">
                    <a className="card " href="">
                        <img alt="" src={card2}/>
                        <p>Рубль будет?</p>
                        <p className="card-desc">Пожулайста</p>
                    </a>
                </div>
                <div className="card__container">
                    <a className="card " href="">
                        <img alt="" src={card3}/>
                        <p>Новости будет?</p>
                        <p className="card-desc">Пожуйлиста</p>
                    </a>
                </div>
                <div className="card__container">
                    <a className="card " href="">
                        <img alt="" src={card4}/>
                        <p>Тапать будешь?</p>
                        <p className="card-desc">Пжжпжжпжпж</p>
                    </a>
                </div>
                <div className="card__container">
                    <a className="card " href="">
                        <img alt="" src={card5}/>
                        <p>Погоду будешь?</p>
                        <p className="card-desc">Пожжалста</p>
                    </a>
                </div>
            </div>
        </section>
    </main>


}