import styled from "styled-components";
import { CommonLayout, CompanyLayout } from "../Common/Layout";
import { TitleH1 } from "../Common/Title";
import { Companies } from "../../Data/CompanyData";
import { CommonContentDiv } from "../Common/Elements";
import media from "../../lib/media";

const Company: React.FC = () => {
  return (
    <CommonLayout id='partners'>
      <CompanyContentLayout>
        <CompanyTitle>Partners</CompanyTitle>
        <CompanyGrid>
          {Companies.map((data, i) => (
            <CompanyImg key={i} img={data.img} />
          ))}
        </CompanyGrid>
      </CompanyContentLayout>
    </CommonLayout>
  );
};

const CompanyTitle = styled(TitleH1)`
  margin-bottom: 3rem;
  text-align: center;
`;

const CompanyContentLayout = styled(CommonContentDiv)`
  flex-direction: column;
  padding: 5rem 0px;
  ${media.small} {
    width: 80%;
  }
`;

const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
  height: 100%;
  justify-content: space-between;
  gap: 1rem 2rem;
  margin-bottom: 5rem;
  ${media.small} {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

const CompanyImg = styled.div<{ img?: string }>`
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 150%;
  min-height: 100px;
  border-radius: 20px;

  ${media.small} {
    width: auto;
    min-width: 100px;
    height: auto;
    min-height: 100px;
  }
`;
export default Company;
