import React from 'react';
import style from './Title.css';

const Title = props =>
    <div className={style.title}>
        <h1>{props.title}</h1>
        <p>Ilość zadań do zrobienia: {props.numberoftasks}</p>
    </div>

export default Title;
