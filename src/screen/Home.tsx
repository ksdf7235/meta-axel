import styled from "styled-components";
import { HomeLayout, CompanyLayout } from "../component/Common/Layout";
import Ark from "../component/Home/Ark";
import Description from "../component/Home/Description";
import Main from "../component/Home/Main";

function Home() {
  return (
    <HomeLayout>
      <Main />
      <Description />
      <Ark />
    </HomeLayout>
  );
}
export default Home;
