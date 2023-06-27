export default function GameSuggestion(props) {
  return (
    <article className="gameSuggestion">
      <div className="imgContainer">
        <div>
          <a href="">
            <img src={props.src} alt="" />
            {props.isNew && <div className="newTag">NEW</div>}
          </a>
        </div>
      </div>
      <a className="channelName" href="">
        {props.gameName}
      </a>
      <a className="channelGame" href="">
        {props.gameViewers} Viewers
      </a>

      <div className="tagsContainer">
        {props.gameTags.map((tag, index) => {
          return <button key={index}>{tag}</button>;
        })}
      </div>
    </article>
  );
}
