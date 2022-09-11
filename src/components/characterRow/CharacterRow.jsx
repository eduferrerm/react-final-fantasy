import { useEffect, useState } from "react";
import { CharacterRowItem } from "./CharacterRowItem";

export const CharacterRow = ({gameCharacters}) => {
  const [filterValue, setfilterValue] = useState('')
  const [filteredArray, setFilteredArray] = useState(gameCharacters)

  useEffect(()=>{
    setFilteredArray(gameCharacters.filter((character) => character.name.toLowerCase().includes(filterValue.toLowerCase())))
  },[filterValue])

  return (
    <>
      <section>
        <header>
          <h2 className="mb-4">Total Available Characters <span className="text-teal-500 inline-block mx-4">|</span> {gameCharacters.length}</h2>
        </header>
        <input 
          className="text-blue-900 rounded-sm h-10 w-full md:max-w-sm pl-4 mb-8" 
          type="text"
          value={filterValue}
          onChange={(ev) => setfilterValue(ev.target.value)}
        />
      </section>
      <section>
        <ul className="flex flex-wrap">
          {filteredArray.length > 0 
            ? filteredArray.map((character, idx, array) => (<CharacterRowItem key={character.origin + idx} characterData={character}/>))
            : <div className="w-full h-20 flex justify-center items-center p-20">
                <p className="text-center">No results found for term:<br></br><span className="text-teal-500 inline-block text-xl "> {filterValue}</span></p>
              </div>
          }
        </ul>
      </section>
    </>
  )
}