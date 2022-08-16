export const selectLang = (Lang: boolean) => {
  return Lang
    ? {
        //헤더
        HeaderLang: [
          "BUILDING NFT",
          "LANDING NFT",
          "CHARACTER NFT",
          "RARITY",
          "TEAM",
          "PARTNERS",
          "ROADMAP",
        ],
        MainLang: {
          mainTitle: `Invitation \nto the NXDF Ecosystems`,
          mainBoxTitle: [
            "De-Fi Platform",
            "Blockchain Infrastructure",
            "P2E Infrastructure",
          ],
        },
      }
    : {
        //Header
        HeaderLang: [
          "NXDF 생태계",
          "백서",
          "팀",
          "깃허브",
          "읽을거리",
          "거래소",
          "메타엑셀",
        ],
        MainLang: {
          mainTitle: `NXDF 생태계로의 초대`,
          mainBoxTitle: [
            "De-Fi 플랫폼",
            "블록체인 인프라와 개발도구",
            "P2E 인프라와 개발도구",
          ],
        },
      };
};
