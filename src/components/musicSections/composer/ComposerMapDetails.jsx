export const ComposerMapDetails = ({detail}) => (
  detail.map((arrItem, idx) => (
    <span key={arrItem + idx} className="mr-2">
      {arrItem}
    </span>
  ))
)