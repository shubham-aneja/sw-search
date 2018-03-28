import React from 'react';
import './planet.css';

export default function Planet(props) {
    return (
        <div>
            <div>Name: {props.name} </div>
            <div>Population: {props.population} </div>
        </div>
    )
}