import styled from "styled-components";

import React, { useState, useRef, useEffect } from "react";
import Countdown from "react-countdown";
import { useRecoilState } from "recoil";
import { LangState } from "../../atoms";

interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

interface DateProps {
  date: string;
  name: string;
}

const Content = styled.main`
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimerSpan = styled.span`
  font-size: 50px;
  color: #4fff31;
  font-family: "Wallpoet", sans-serif; ;
`;

const EndTimer = styled.div`
  font-size: 50px;
  color: #4fff31;
  font-family: "Wallpoet", sans-serif;
  cursor: pointer;
`;

const Timer: React.FC<DateProps> = ({ date, name }) => {
  const [Lang, setLang] = useRecoilState(LangState);
  console.log(date);
  let drawtime = new Date(date).getTime();
  let timenow = Date.now();
  const GoMint = () => {
    if (window.innerWidth > 1200) {
      window.location.href = `https://mint-meta.firebaseapp.com?lang=${
        Lang ? "ko" : "en"
      }`;
    } else {
      alert("please connect desktop");
    }
  };
  const GoFame = () => {
    if (window.innerWidth > 1200) {
      window.location.href = "https://mint-meta.firebaseapp.com/";
    } else {
      alert("please connect desktop");
    }
  };
  const GoPrequel = () => {
    if (window.innerWidth > 1200) {
      window.location.href = `https://burnt-prequel.firebaseapp.com/?lang=${
        Lang ? "ko" : "en"
      }`;
    } else {
      alert("please connect desktop");
    }
  };
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: TimerProps) => {
    if (completed) {
      if (name === "meta") {
        // Render a completed state
        return <EndTimer onClick={GoMint}>L I V E</EndTimer>;
      } else if (name === "fame") {
        // Render a completed state
        return <EndTimer onClick={GoFame}>L I V E</EndTimer>;
      } else if (name === "prequel") {
        // Render a completed state
        return <EndTimer onClick={GoPrequel}>L I V E</EndTimer>;
      }
    } else {
      // Render a countdown
      return (
        <TimerSpan>
          {days}:{hours}:{minutes}:{seconds}
        </TimerSpan>
      );
    }
  };
  return (
    <>
      <Content>
        <Countdown date={drawtime} renderer={renderer}></Countdown>
      </Content>
    </>
  );
};

export default Timer;
