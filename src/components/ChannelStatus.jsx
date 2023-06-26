export default function ChannelStatus(props) {
  return (
    <article>
      <a
        className={
          props.listeners ? "channelStatus" : "channelStatus notOnline"
        }
        href=""
      >
        <img className="channelStatusIMG" src={props.src} alt="" />
        <div className="channelInfo">
          <p className="channelName">{props.name}</p>
          <p className="channelGame">{props.game}</p>
        </div>
        <p className="channelListeners">
          {props.listeners ? `🔴 ${props.listeners}` : "Offline"}
        </p>
      </a>
    </article>
  );
}
