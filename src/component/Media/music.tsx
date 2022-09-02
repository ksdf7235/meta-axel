import { useEffect, useState, useRef, createRef } from "react";
import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";
import ReactPlayer from "react-player";
import "react-h5-audio-player/lib/styles.css";
import ReactAudioPlayer from "react-audio-player";
import { BoldIcon } from "evergreen-ui";

function Music() {
  const player = createRef<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return loading ? (
    <Audio
      ref={player}
      autoPlay={loading}
      autoPlayAfterSrcChange={false}
      preload={"metadata"}
      onPlay={(data) => console.log(data)}
      src='/media/Destiny_Of_The_Fallen_Angel_Lea.mp3'
    />
  ) : (
    <></>
  );
}

const AudioTest = styled.audio`
  width: 100px;
  height: 100px;

  background-color: white;
`;
const Audio = styled(AudioPlayer)`
  .rhap_progress-section {
    display: none;
  }
  .rhap_main {
    width: 60px;
    height: 60px;
  }
  .rhap_controls-section {
    width: 100%;
    height: 100%;
    .rhap_additional-controls {
      display: none;
    }
    .rhap_volume-controls {
      display: none;
    }
    .rhap_main-controls {
      width: 100%;
      height: 100%;
      .rhap_main-controls-button {
        width: 100%;
        height: 100%;
        color: white;
        font-size: 50px;
      }
      .rhap_rewind-button {
        display: none;
      }
      .rhap_forward-button {
        display: none;
      }
    }
  }
`;

export default Music;
