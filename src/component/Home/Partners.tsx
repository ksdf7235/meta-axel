import styled from "styled-components";
import { TitleH1 } from "../Common/Title";
import { CommonContentLayout, CommonLayout } from "../Common/Layout";
import { AllPartners } from "../../Data/PartnersData";
import PartnerPlate from "./Partners/PartnersPlate";
import { CommonContentDiv } from "../Common/Elements";
import media from "../../lib/media";

function Partners() {
  return (
    <>
      <TeamLayout id='team'>
        <PartnerContent>
          <PartnerTitle>Team</PartnerTitle>
          <NxdfBanner></NxdfBanner>
          <Why>&</Why>
          <PartnerGrid>
            {AllPartners.map(({ img, name, position }, i) => (
              <PartnerPlate
                key={`p${i}`}
                img={img}
                name={name}
                position={position}
              />
            ))}
          </PartnerGrid>
        </PartnerContent>
      </TeamLayout>
    </>
  );
}

const NxdfBanner = styled.div`
  width: 20%;
  min-height: 40px;
  background-image: url("/image/common/nxdf_banner.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-bottom: 2rem;
  border-radius: 20px;
  background-color: gray;
`;

const Why = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const TeamLayout = styled(CommonLayout)`
  margin-top: 10rem;
`;

const PartnerContent = styled(CommonContentDiv)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PartnerGrid = styled.div`
  display: grid;
  width: 80%;
  margin-top: 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  min-height: 400px;
  justify-content: space-between;
  gap: 1rem 2rem;
  margin-bottom: 5rem;
  ${media.small} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.phone} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PartnerTitle = styled(TitleH1)`
  margin: 3rem;
  display: inline-block;
  text-align: center;
`;

export default Partners;
