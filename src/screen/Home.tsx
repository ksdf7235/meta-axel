import styled from "styled-components";
import { HomeLayout, CompanyLayout } from "../component/Common/Layout";
import Ark from "../component/Home/Ark";
import Build from "../component/Home/Build";
import Character from "../component/Home/Character";
import Company from "../component/Home/Company";
import Description from "../component/Home/Description";
import Land from "../component/Home/Land";
import Main from "../component/Home/Main";
import Partners from "../component/Home/Partners";
import Rarity from "../component/Home/Rarity";
import RoadMap from "../component/Home/RoadMap";
import Sale from "../component/Home/Sale";

function Home() {
  return (
    <HomeLayout>
      <Main />
      <Description />
      <Ark />
      <Build />
      <Land />
      <Character />
      <Rarity />
      <Sale />
      <Partners />
      <Company />
      <RoadMap />
    </HomeLayout>
  );
}
export default Home;
