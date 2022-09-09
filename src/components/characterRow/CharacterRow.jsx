import { CharacterRowImg } from "./CharacterRowImg";

export const CharacterRow = ({gameCharacters}) => {
  return (
    <section>
      <h2>Characters with Images | {gameCharacters.length}</h2>
      <ul className="flex flex-wrap px-4">
        {
          gameCharacters.map((character, idx) => (
            <li
              className="w-1/2 md:w-full max-w-1/4 p-4"
              key={character.origin + idx}
            >
              <p>{character.name} | {character.japaneseName}</p>
              <p>Race: {character.race}</p>
              <p>Gender: {character.gender}</p>
              <p>Age: {character.age}</p>
              <p>Height: {character.height}</p>
              <p>Job: {character.job}</p>
              <CharacterRowImg src={character.pictures[0]} name={character.name}/>
            </li>
          ))
        }
      </ul>
    </section>
  )
}