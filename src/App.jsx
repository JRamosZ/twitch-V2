import ChannelStatus from "./components/ChannelStatus";
import GameSuggestion from "./components/GameSuggestion";

export default function App() {
  return (
    <>
      <div className="row">
        <div className="col-xl-3 leftSide">
          <ChannelStatus
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/51984fc0-a31a-413c-b1b8-3331bdf6d036-profile_image-70x70.png"
            name="aldo_geo"
            game="Only Up!"
            listeners="11.2K"
          />
          <ChannelStatus
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/a71759f1-11c4-4b0d-bec5-35a480b34958-profile_image-70x70.png"
            name="AryGameplays"
            game="Clone Hero"
            listeners="5.5K"
          />
          <ChannelStatus
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/ad2eeca6-98a9-4541-873d-580f5cbab516-profile_image-70x70.png"
            name="Alanalarana"
            game="Travel & Ourdoors"
            listeners="1.2K"
          />
          <ChannelStatus
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/bbbd2234-47c3-4650-962c-ff3760013c46-profile_image-70x70.png"
            name="LEC"
            game="9 new videos"
            listeners={null}
          />
          <ChannelStatus
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70.png"
            name="Cellbit"
            game="2 new videos"
            listeners={null}
          />
        </div>

        <div className="col-xl-9 rightSide">
          <GameSuggestion
            src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"
            gameName="League of Legends"
            gameViewers="103K"
            gameTags={["RPG", "Shooter"]}
            isNew={true}
          />
          <GameSuggestion
            src="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"
            gameName="Valoran"
            gameViewers="74.7K"
            gameTags={["FPS", "Shooter"]}
            isNew={false}
          />
          <GameSuggestion
            src="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg"
            gameName="Minecraft"
            gameViewers="56.6K"
            gameTags={["Simulation"]}
            isNew={false}
          />
          <GameSuggestion
            src="https://static-cdn.jtvnw.net/ttv-boxart/245018539_IGDB-188x250.jpg"
            gameName="Only Up!"
            gameViewers="44.5"
            gameTags={["Adventure Game"]}
            isNew={true}
          />
          <GameSuggestion
            src="https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg"
            gameName="Just Chatting"
            gameViewers="391K"
            gameTags={["IRL"]}
            isNew={true}
          />
          <GameSuggestion
            src="https://static-cdn.jtvnw.net/ttv-boxart/515024-188x250.jpg"
            gameName="Diablo"
            gameViewers="105K"
            gameTags={["Simulation"]}
            isNew={false}
          />
          <GameSuggestion
            src="https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg"
            gameName="Call of Duty: Warzone"
            gameViewers="25.5K"
            gameTags={["FPS", "Shooter"]}
            isNew={false}
          />
          <GameSuggestion
            src="https://static-cdn.jtvnw.net/ttv-boxart/509663-188x250.jpg"
            gameName="Special Events"
            gameViewers="4.9K"
            gameTags={["IRL"]}
            isNew={false}
          />
          <GameSuggestion
            src="https://static-cdn.jtvnw.net/ttv-boxart/515025-188x250.jpg"
            gameName="Overwatch 2"
            gameViewers="38.3K"
            gameTags={["FPS", "Shooter"]}
            isNew={true}
          />
          <GameSuggestion
            src="https://static-cdn.jtvnw.net/ttv-boxart/15828774_IGDB-188x250.jpg"
            gameName="Greyhill Incident"
            gameViewers="40"
            gameTags={["FPS", "Shooter"]}
            isNew={true}
          />
        </div>
      </div>
    </>
  );
}
