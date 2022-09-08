export const GameRowItem = (props) => (
  <li>
    test
    <h2>{props.title}</h2>
    <h3>Released: {props.releaseDate}</h3>
    <h4>Platform: {props.platform}</h4>
    <p>{props.description}</p>
  </li>
)

