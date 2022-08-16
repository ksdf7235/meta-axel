import styled from "styled-components";
import { TitleH1 } from "../Common/Title";
import { DesContentLayout, DesLayout } from "../Common/Layout";
import { Bzpartner, Devpartner } from "../../Data/PartnersData";
import PartnerPlate from "./Partners/PartnersPlate";
import { DesContent } from "../Common/Elements";
import media from "../../lib/media";

function Partners() {
  return (
    <>
      <DesContentLayout id='Team'>
        <PartnerContent>
          <PartnerTitle>Business Team</PartnerTitle>
          <PartnerGrid>
            {Bzpartner.map(({ img, name, position }, i) => (
              <PartnerPlate
                key={`p${i}`}
                img={img}
                name={name}
                position={position}
              />
            ))}
          </PartnerGrid>
        </PartnerContent>
      </DesContentLayout>
      <DesLayout>
        <PartnerContent>
          <PartnerTitle>Development Team</PartnerTitle>
          <PartnerGrid>
            {Devpartner.map(({ img, name, position }, i) => (
              <PartnerPlate
                key={`D${i}`}
                img={img}
                name={name}
                position={position}
              />
            ))}
          </PartnerGrid>
        </PartnerContent>
      </DesLayout>
    </>
  );
}

const PartnerContent = styled(DesContent)`
  flex-direction: column;
`;

const PartnerGrid = styled.div`
  display: grid;
  width: 100%;
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
`;

export default Partners;
