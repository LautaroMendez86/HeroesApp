import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DCscreen = () => {
  return (
    <div>
        <h1>
            DC
        </h1>
        <hr/>

        <HeroList publisher='DC Comics'/>
    </div>
  )
}
