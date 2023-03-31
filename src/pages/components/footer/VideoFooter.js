import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Emilly Santiago</h3>
        <p>Descrição do Vídeo</p>
        <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoFooterMusic__text">
          <p>Título da música</p>
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
