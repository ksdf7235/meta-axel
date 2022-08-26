import styled from "styled-components";

import React, { useState, useRef, useEffect } from "react";
import Countdown from "react-countdown";

interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
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

const Timer: React.FC = () => {
  let drawtime = new Date("September 31, 2022 00:00:00 UTC").getTime();
  let timenow = Date.now();
  const GoMint = () => {
    window.location.href = "https://discord.gg/UxAYWbkXyS";
  };
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: TimerProps) => {
    if (completed) {
      // Render a completed state
      return <EndTimer onClick={GoMint}>Mint now</EndTimer>;
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
