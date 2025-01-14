import React, { useState } from 'react';
import Tour from './Tour';




export default function Tours ({tours, removeTour}) {
    
    return (
        <div className="tours">
           {tours.map((tour) => {
        
            return (
                <Tour key={tour.id} {...tour} removeTour={removeTour}/>
            )
           })}
        </div>
    )
}