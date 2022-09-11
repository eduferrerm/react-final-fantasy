import { useEffect, useState } from "react";
import { CharacterRowItem } from "./CharacterRowItem";

export const CharacterRow = ({gameCharacters}) => {
  const [filterValue, setfilterValue] = useState('')
  const [filteredArray, setFilteredArray] = useState(gameCharacters)

  useEffect(()=>{
    setFilteredArray(gameCharacters.filter((character) => character.name.toLowerCase().includes(filterValue.toLowerCase())))
  },[filterValue])

  useEffect(()=>{
    setFilteredArray(gameCharacters);
    setfilterValue('');
  },[gameCharacters])

  return (
    <>
      <section>
        <header className="flex flex-col justify-center text-center pt-16">
          <h2 className="text-5xl font-libre upper mb-2 text-slate-400">Meet The Characters</h2>
          <p className="mb-10">Here's a brief selection of characters fetched from an API</p>
          <h3 className="mb-4 inline-block">Total Available Characters <span className="text-teal-500 inline-block mx-4">|</span> {gameCharacters.length}</h3>
          <input 
            className="text-blue-900 rounded-sm h-10 md:max-w-sm pl-4 mb-8 mx-auto w-8/12" 
            type="text"
            value={filterValue}
            onChange={(ev) => setfilterValue(ev.target.value)}
          />
        </header>
        <ul className="flex flex-wrap">
          {filteredArray.length > 0 
            ? filteredArray.map((character, idx, array) => (<CharacterRowItem key={character.origin + idx} characterData={character}/>))
            : <div className="w-full h-20 flex justify-center items-center p-20">
                <p className="text-center">😔<br></br>Unfortunately,<br></br>no results were found for term:<br></br><span className="text-teal-500 inline-block text-xl "> {filterValue}</span></p>
              </div>
          }
        </ul>
      </section>
    </>
  )
}