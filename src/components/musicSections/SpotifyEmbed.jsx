export const SpotifyPlayer = (playlistID) => {
  // console.log({playlistID})
  
  return (
    <iframe
      src={`https://open.spotify.com/embed/album/${playlistID}`} 
      width="100%" height="80" frameBorder="0" allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
    </iframe>
  )
}

