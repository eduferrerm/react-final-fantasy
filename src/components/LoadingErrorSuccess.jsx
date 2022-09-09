export const LoadingErrorSuccess = (props) => {
  const loading = props.loading;
  const error = props.error;
  const dataType = props.dataType;

  if (loading) {
    return (
      <div className="text-center">Loading {dataType} data! please wait...</div>
    )
  } else if (error) {
      return (
        <div className="text-center">{`Oops! there seems to be an issue fetching the data - ERROR: ${error}`}</div> 
      )
  }
  return (
    <>
      {props.children}
    </>
  )
}