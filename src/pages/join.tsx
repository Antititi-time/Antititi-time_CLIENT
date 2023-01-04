import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import JoinTop from '@src/components/join/JoinTop';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgCenturyGothicLogo } from '@src/assets/images';
import { icJoinRound } from '@src/assets/icons';
import ImageDiv from '@src/components/common/ImageDiv';

function Join() {
  return (
    <StJoin>
      <JoinTop />
      <StAsset />
      <StMainContainer>
        <StTeamName>&apos;안티티티티프레져프레저안티티&apos;</StTeamName>
        <StRowContainer>
          <ImageDiv
            src={imgCenturyGothicLogo}
            alt="century_gothic_logo"
            className="imgCenturyGothicLogo"
            layout="fill"></ImageDiv>
          <StInviteComment>에 초대합니다</StInviteComment>
        </StRowContainer>
        <StListContainer>
          <StList>총 OO명</StList>
          <StList>질문 개수: 12개</StList>
          <StList>예상 소요시간: 약 10분 이내</StList>
        </StListContainer>
      </StMainContainer>
      <StInputContainer>
        <StRowContainer>
          <ImageDiv src={icJoinRound} alt="icon_join_round" className="icJoinRound"></ImageDiv>
          <StNickname>참여자 닉네임</StNickname>
        </StRowContainer>
        <StInputBox placeholder="닉네임을 입력해주세요"></StInputBox>
        <StAlertComment>4글자 이내 한글로 입력해주세요</StAlertComment>
      </StInputContainer>
    </StJoin>
  );
}

export default Join;

const StJoin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 39rem;
  height: 100vh;
  background-color: ${COLOR.IVORY_1};
`;

const StAsset = styled.div`
  width: 16rem;
  height: 11rem;
  margin-top: 2.7rem;
  background-color: ${COLOR.IVORY_3};
`;

const StMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 29.4rem;
  height: 20.8rem;
  padding: 3rem 2.4rem 3rem 2.4rem;
  margin-top: 2rem;
  margin-bottom: 2.9rem;
  background-color: ${COLOR.WHITE_100};
  box-shadow: 0rem 0.2rem 1.3rem rgba(0, 0, 0, 0.05);
  border-radius: 1.2rem;

  .imgCenturyGothicLogo {
    position: relative;
    width: 7.2rem;
    height: 2.4rem;
  }
`;

const StTeamName = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_16};
  line-height: 2.56rem;
`;

const StRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StInviteComment = styled.p`
  color: ${COLOR.ORANGE_2};
  ${FONT_STYLES.NEXON_B_20};
`;

const StListContainer = styled.ol`
  margin-top: 2rem;
  list-style-type: disc;
`;

const StList = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_16};
`;

const StInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 29.4rem;
`;

const StNickname = styled.p`
  margin-left: 0.8rem;
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_16};
`;

const StInputBox = styled.input`
  padding: 1.2rem;
  margin-bottom: 0.8rem;
  border: none;
  border-bottom: 0.1rem solid ${COLOR.GRAY_7E};
  background: none;
  ${FONT_STYLES.NEXON_R_14};
`;

const StAlertComment = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_R_12};
`;
