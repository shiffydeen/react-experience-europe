import React, { useState } from 'react';
import Tour from './Tour';


export default function Tours (props) {
    const {tours, removeTour} = props
    return (
        <div>
            {tours.map((tour) => {
               return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
            })}
        </div>
    )
}