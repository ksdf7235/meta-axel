import styled from "styled-components";
import { HomeLayout, CompanyLayout } from "../component/Common/Layout";
import Ark from "../component/Home/Ark";
import Build from "../component/Home/Build";
import Character from "../component/Home/Character";
import Description from "../component/Home/Description";
import Main from "../component/Home/Main";

function Home() {
  return (
    <HomeLayout>
      <Main />
      <Description />
      <Ark />
      <Build />
      <Character />
    </HomeLayout>
  );
}
export default Home;
