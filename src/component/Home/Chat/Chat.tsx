import { useEffect, useState } from "react";
import styled from "styled-components";
import Spritesheet from "react-responsive-spritesheet";
import media from "../../../lib/media";
import { useRecoilState } from "recoil";
import { LangState } from "../../../atoms";
import { selectLang } from "../../../lib/selectLang";

function Chat() {
  const [Lang, setLang] = useRecoilState(LangState);
  const { Chat: ChatLang } = selectLang(Lang);
  const Width = window.innerWidth;
  const [play, setPlay] = useState(Width < 768 ? true : false);
  const [chat, setChat] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const sendMessageHandler = () => {
    // setChat((prev) => [...prev, message]);
    // setMessage("");
    Lang ? alert("A.I is under training") : alert("A.I가 학습 중 입니다");
  };

  const [Txt, setTxt] = useState(ChatLang);
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);
  const [ArrayCount, setArrayCount] = useState(0);
  const [prev, setPrev] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ArrayCount + 1 !== Txt.length) {
        setText(Text + Txt[ArrayCount][Count]); // 이전 set한 문자 + 다음 문자
        setCount(Count + 1); // 개수 만큼 체크
      } else {
        clearInterval(interval);
      }
    }, 100);
    if (Count === Txt[ArrayCount].length) {
      if (ArrayCount + 1 === Txt.length) clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
      setArrayCount(ArrayCount + 1);
      setCount(0);
      setPrev((prev) => [...prev, Text]);
      setText("");
      // Count를 따로 두지 않고 Text.length 체크도 가능
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  });
  return (
    <ChatLayout>
      <ChatPlate>
        <ChatImg src='/image/chat/chat_bg.png' />
        <ChatContent>
          <ul>
            <li>{`mother - from - metaaxel ~? > ${
              ArrayCount !== 0 ? (!prev[0] ? "" : prev[0]) : Text
            }`}</li>
            <li>{`mother - from - metaaxel ~? > ${
              ArrayCount !== 1 ? (!prev[1] ? "" : prev[1]) : Text
            }`}</li>
            <li>{`mother - from - metaaxel ~? > ${
              ArrayCount !== 2 ? (!prev[2] ? "" : prev[2]) : "...?"
            }`}</li>
          </ul>
        </ChatContent>
        <Chatting>
          <ChatInput
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type='text'
          ></ChatInput>
          <ChatSend onClick={sendMessageHandler}>send</ChatSend>
        </Chatting>
      </ChatPlate>
    </ChatLayout>
  );
}
const ChatImg = styled.img`
  position: absolute;
  width: 400px;
  height: 250px;
  bottom: 0.5rem;
`;
const ChatContent = styled.div`
  width: 90%;
  height: 80%;
  min-height: 150px;
  color: #4fff31;
  font-size: 14px;
`;

const Chatting = styled.div`
  width: 90%;
  height: 10%;
  z-index: 10;
  align-self: flex-start;
  margin-bottom: 0.5rem;
`;

const ChatSend = styled.button`
  width: 20%;
  height: 100%;
`;

const ChatInput = styled.input`
  width: 80%;
  height: 100%;
`;
const ChatLayout = styled.div`
  position: absolute;
  top: 50%;
  right: 20%;
  width: 400px;
  height: 250px;
  padding: 0.5rem;
  background-color: black;
  opacity: 0.7;
  border-radius: 50px 50px 80px 50px;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 768px) and (max-width: 1500px) {
    display: none;
  }
  ${media.small} {
    position: static;
  }
`;

const ChatPlate = styled.div`
  margin: 0.5rem;
  width: 100%;
  height: 100%;
  min-width: 360px;
  min-height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.small} {
    position: relative;
  }
`;
export default Chat;
