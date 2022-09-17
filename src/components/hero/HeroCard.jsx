import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagesPath = `/assets/${id}.jpg`

  return (

    <div className='col'>
        <div className='card cardGrid'>
            <div className='row no-gutters'>
                <div className='col-4 col-1'>
                    <img src={imagesPath} className='card-img' alt={superhero}/>
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'> {superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>

                        {
                            (alter_ego !== characters )
                            && <p className='text-muted'>{characters}</p>
                        }

                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                            
                        </p>
                         <Link to={`/hero/${id}`}>Mas info..</Link>
                    </div>
                </div>
               
            </div>
          
         </div>   
    </div>
    
  )
}
