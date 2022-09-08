export const VideoPlayer = (posterAsset, videoAsset) => {
  return (
    <video
      className='h-full w-full object-cover'
      autoPlay muted loop playsInline poster={posterAsset} src={videoAsset}
    />
  )
}