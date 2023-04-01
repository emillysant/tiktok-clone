import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoFooterMusic__text">
          <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://images.vexels.com/media/users/3/132597/isolated/preview/e8c7c6b823f6df05ec5ae37ea03a5c88-icone-de-disco-de-vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
