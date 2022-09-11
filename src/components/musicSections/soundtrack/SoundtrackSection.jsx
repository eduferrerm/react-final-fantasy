import { Wrapper } from "../../layout/Wrapper";
import { ExternalButton } from "../../ui/button/ExternalButton";
import spotifyIcon from '../../../assets/img/icons/spotify.svg';
export const SoundtrackSection = ({title, soundtrackData, selectedIndex, selectedID }) => {
  return (
    <section 
      className="
        sec-soundtrack
        full-width
        flex flex-col justify-center items-center
        text-center
        py-32"
      >
        <Wrapper>
          <h2 className="text-slate-400 text-5xl font-libre mb-8">Listen to {title}'s</h2>
          <h3 className="text-4xl font-cond uppercase mb-16">Original Soundtrack</h3>
          <iframe
            src={`https://open.spotify.com/embed/album/${soundtrackData[selectedIndex].spotifyEmbedID}`} 
            width="100%" height="380" frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
          <ExternalButton url={soundtrackData[selectedIndex].spotifyURL} icon={spotifyIcon} text={'View Spotify'} additionalClasses={'mt-8'}/>
        </Wrapper>
    </section>
  )
}