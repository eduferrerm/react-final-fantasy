import { useEffect, useState } from "react";
import { CharacterRowItem } from "./CharacterRowItem";

export const CharacterRow = ({gameCharacters}) => {
  const [filterName, setFilterName] = useState('')
  const [filteredArray, setFilteredArray] = useState(gameCharacters)

  useEffect(()=>{
    setFilteredArray(gameCharacters.filter((character) => character.name.toLowerCase().includes(filterName.toLowerCase())))
  },[filterName])

  return (
    <>
      <header>
        <h2 className="mb-2">Available Characters <span className="text-teal-500">|</span> {gameCharacters.length}</h2>
      </header>
      <section>
        <input 
          className="text-blue-900 rounded-sm h-10 w-full md:max-w-sm pl-4" 
          type="text"
          value={filterName}
          onChange={(ev) => setFilterName(ev.target.value)}
        />
      </section>
      <section>
        <ul className="flex flex-wrap">
          {filteredArray.length > 0 
            ? filteredArray.map((character, idx, array) => (<CharacterRowItem key={character.origin + idx} characterData={character}/>))
            : <div className="w-full h-20 flex justify-center items-center p-20">
                <p className="text-center">No results found for term:<br></br><span className="text-teal-500 inline-block text-xl "> {filterName}</span></p>
              </div>
          }
        </ul>
      </section>
    </>
  )
}