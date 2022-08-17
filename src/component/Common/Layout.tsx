import styled from "styled-components";
import media from "../../lib/media";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Content = styled.main`
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export const CommonLayout = styled.div`
  width: 100%;
  background: ${(props) => props.theme.bgColor};
`;

export const CommonContentLayout = styled.div`
  width: 100%;
  background: ${(props) => props.theme.bgDarkColor};
`;

export const CompanyLayout = styled.div`
  width: 100%;
  background: white;
`;

export const HomeLayout = styled.div`
  margin: 0 auto;
  width: 100%;
`;
export default Layout;
