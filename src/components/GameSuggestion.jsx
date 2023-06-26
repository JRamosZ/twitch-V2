export default function GameSuggestion(props) {
  return (
    <article className="gameSuggestion">
      <a href="">
        <img src={props.src} alt="" />
      </a>
      <a className="channelName" href="">
        {props.gameName}
      </a>
      <a className="channelGame" href="">
        {props.gameViewers} Viewers
      </a>
      {props.isNew && <div className="newTag">NEW</div>}
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