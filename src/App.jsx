import ChannelStatus from "./components/ChannelStatus";
import GameSuggestion from "./components/GameSuggestion";
import { channels } from "./data/channels";
import { suggestions } from "./data/suggestions";

export default function App() {
  return (
    <>
      <div className="row">
        <div className="col-xl-3 leftSide">
          {channels.map((channel, index) => {
            return (
              <ChannelStatus
                key={`channel-${index}`}
                src={channel.src}
                name={channel.name}
                game={channel.game}
                listeners={channel.listeners}
              />
            );
          })}
        </div>

        <div className="col-xl-9 rightSide">
          {suggestions.map((suggestion, index) => {
            return (
              <GameSuggestion
                key={`suggestion-${index}`}
                src={suggestion.src}
                gameName={suggestion.gameName}
                gameViewers={suggestion.gameViewers}
                gameTags={suggestion.gameTags}
                isNew={suggestion.isNew}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
