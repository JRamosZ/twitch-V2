export default function GameSuggestion(props) {
  return (
    <article className="gameSuggestion">
      <a href="">
        <img src={props.src} alt="" />
        {props.isNew && <div className="newTag">NEW</div>}
      </a>
      <a className="channelName" href="">
        {props.gameName}
      </a>
      <a className="channelGame" href="">
        {props.gameViewers} Viewers
      </a>

      <div className="tagsContainer">
        {(() => {
          let td = [];
          for (let i = 0; i < props.gameTags.length; i++) {
            td.push(<button key={i}>{props.gameTags[i]}</button>);
          }
          return td;
        })()}
      </div>
    </article>
  );
}
