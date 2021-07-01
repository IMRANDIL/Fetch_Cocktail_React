import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef('');

React.useEffect(()=>{
searchValue.current.focus()
},[])

const preventDefaultt = (e)=>{
  e.preventDefault();
}

  const searchCocktail = ()=>{
    const inputValue = searchValue.current.value;
    setSearchTerm(inputValue)
    if(!inputValue){
      return setSearchTerm('a')
    }
  }
  
  return (
    <section className="section search">
      <form className="search-form" onSubmit={preventDefaultt}>
        <div className="form-control">
<label htmlFor="name">search your favorite cocktail :)</label>
<input type="text" id='name' ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
