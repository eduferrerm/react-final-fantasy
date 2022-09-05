export const LoadingErrorSuccess = (props) => {
  const loading = props.loading;
  const error = props.error;
  const data = props.data;
  const dataSelection = props.dataSelection;

    if (loading) {
      return (
        <div className="text-center">Loading game data! please wait...</div>
      )
    } else if (error) {
        return (
          <div className="text-center">{`Oops! there seems to be an issue fetching the data - ERROR: ${error}`}</div> 
        )
    } else if (data !== null && dataSelection !== undefined) {
      return (
        <>
          {props.children}
        </>
      )
    }
}