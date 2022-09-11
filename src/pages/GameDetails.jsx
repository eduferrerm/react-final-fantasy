import { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";

import { LoadingErrorSuccess } from "../components/LoadingErrorSuccess";
import { GameRow } from "../components/gameRow/GameRow";
import { CharacterRow } from "../components/characterRow/CharacterRow";
import { Wrapper } from "../components/layout/Wrapper";
import { BuyGame } from "../components/buyGame/BuyGame";
import { SoundtrackSection } from "../components/musicSections/soundtrack/SoundtrackSection";

import { CONTENT } from "../content/game-details";

export const GameDetails = ({title, selectedGameID})=> {
  const { getGamesApi, getCharactersApi } = useContext(GameContext);
  // const [selectedGameIndex, setSelectedGameIndex] = useState(null)  

  const returnIndex = (selectedGameID) => {
    let index;
    switch(selectedGameID) {
      case '53da5efb-5925-409b-399b-08d6b0a627a3':
        index = 0;
        return 0;
      case '9fc1c377-95f1-4a09-399f-08d6b0a627a3':
        index = 1;
        break;
      case '0da69a55-9ab2-4798-39a7-08d6b0a627a3':
        index = 2;
        break;
    }
    return index
  };
  
  const returnPageGameOrCharacter = (array, filteringGame, filterArgument) => {
    let filteredArray;
    if (filteringGame) {
      filteredArray = array.filter(game => game.gameId === filterArgument);
    } else {
      filteredArray = array.filter(character => character.origin === filterArgument);
    }
    return filteredArray;
  }

  useEffect(()=>{
    document.title = `Details | ${title}`;
  },[])

  return (
    <main className="pt-32">
      <Wrapper>
        <div className="py-10">
          <h1 className="font-cond text-lg text-teal-500">{title} | Details</h1>
        </div>
        <LoadingErrorSuccess 
          loading={getGamesApi.loading} 
          error={getGamesApi.error} 
          data={getGamesApi.data}
          dataType={'game'}
        >
        {getGamesApi.data &&
          <GameRow 
            selectedGames={returnPageGameOrCharacter(getGamesApi.data, true, selectedGameID)}
            isDetailPage={true}/>
        }
        </LoadingErrorSuccess>
        <BuyGame buyGameData={CONTENT.PURCHASE} selectedIndex={returnIndex(selectedGameID)} selectedID={selectedGameID}/>
        <LoadingErrorSuccess 
          loading={getCharactersApi.loading} 
          error={getCharactersApi.error} 
          data={getCharactersApi.data}
          dataType={'character'}
        >
        {getCharactersApi.data &&
          <CharacterRow gameCharacters={returnPageGameOrCharacter(getCharactersApi.data, false, title)}/>
        }
        </LoadingErrorSuccess>
        <SoundtrackSection title={title} soundtrackData={CONTENT.SOUNDTRACK} selectedIndex={returnIndex(selectedGameID)} selectedID={selectedGameID}/>
      </Wrapper>
    </main>
  )
}