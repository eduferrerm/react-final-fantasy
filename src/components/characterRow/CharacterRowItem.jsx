import { CharacterRowImg } from "./CharacterRowImg"

export const CharacterRowItem = ({characterData}) => {

  return ( 
    <li className="flex flex-col justify-between w-1/2 md:w-full max-w-1/2 md:max-w-1/4 p-4 mb-10">
      <p className="text-teal-500 text-md leading-tight font-bold">{characterData.name}</p>
      <p className="text-slate-500 text-xs">{characterData.japaneseName ? characterData.japaneseName : "???"}</p>
      <CharacterRowImg src={characterData.pictures[0]} name={characterData.name}/>
      <p className="mb-1"><span className="font-libre text-slate-400">Race:</span> {characterData.race}</p>
      <p className="mb-1"><span className="font-libre text-slate-400">Gender:</span> {characterData.gender}</p>
      <p className="mb-1"><span className="font-libre text-slate-400">Age:</span> {characterData.age}</p>
      <p className="mb-1"><span className="font-libre text-slate-400">Height:</span> {characterData.height}</p>
      <p className="mb-1"><span className="font-libre text-slate-400">Job:</span> {characterData.job}</p>
    </li>
  )
}