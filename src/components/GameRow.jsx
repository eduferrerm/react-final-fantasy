export const GameRow = ({data}) => (  
  data.map(({ id, title }) => (
    <div key={`${id}${title}`}>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
    </div>
  ))
);

// export const GameRow = ({data}) => {
//   console.log('data:', data);
// }