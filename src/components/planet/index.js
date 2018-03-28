import React from 'react';
import './planet.css';

export default function Planet(props) {
    return (
        <div className={'planet__container population-level-'+getPopulationLevel(+props.population)}>
            <div className='planet__name'>{props.name} </div>

            <div className='planet__population'>Having population:
                <span className='planet__population-count'>{props.population}</span>
            </div>


        </div>
    )
}

function getPopulationLevel(population) {
    let populationLevel;
    if (population < 9999999) {
        populationLevel = 1
    } else if (population > 10000000 && population <= 1000000000) {
        populationLevel = 2
    } else if (population > 1000000000 && population <= 99999999999) {
        populationLevel = 3
    } else if (population > 99999999999) {
        populationLevel = 4
    }
    return populationLevel;
}
