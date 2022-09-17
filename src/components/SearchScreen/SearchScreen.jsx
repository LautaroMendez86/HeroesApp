import React, { useMemo } from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import { getHeroesByName } from '../../helpers/getHeroesByName'
import { HeroCard } from '../hero/HeroCard'
import { useForm } from '../Hooks/useForm'
import queryString from 'query-string'
import "./search.css"

export const SearchScreen = () => {

  const navigate = useNavigate();

  const location = useLocation()

  const {q = ''} = queryString.parse(location.search)

    const [formValues, handleInputChange] = useForm({
      searchText: q,
    })

    const {searchText} = formValues
     const heroesFiltered = useMemo(() => getHeroesByName(q), [q]) ;

    const handleSearch = (e) => {

      e.preventDefault();
      navigate(`?q=${ searchText }`)
    }


  return (
    <div className=''>
        <h1>
            Busquedas
        </h1>
        <div className='row '>
            <div className='col'>
                <h4>Buscar</h4>
                <hr/>

                <form>
                  <input
                  className='form-control'
                  type='text'
                  placeholder='Buscar un heroe'
                  autoComplete='off'
                  value={searchText}
                  onChange={handleInputChange}
                  name="searchText"
                  />
                  <button
                      className='btn btn-secondary mt-3'
                     type='submit'
                     onClick={handleSearch}
                   >
                  Buscar
                  </button>
                </form>
            </div>
            <div className='col'>
              <h4>Resultados</h4>
              <hr/>
              {
                (q === '')
                ? <div className='alert alert-info'>Buscar un heroe</div>
                : (heroesFiltered.length === 0)
                && <div className='alert alert-danger'>No hay resultados para: {q}</div>
              }
              {
                heroesFiltered.map(hero=> (
                  <HeroCard
                  key={hero.id}
                      {...hero}
                  />
                ))
              }
            </div>
        </div>
    </div>
  )
}