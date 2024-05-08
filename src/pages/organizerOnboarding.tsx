import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import BottomButton from '@common/BottomButton';
import ImageDiv from '@common/ImageDiv';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { ORGANIZER_SLIDER_ITEMS } from '@src/constants/organizerOnboarding/organizerSliderItems';
import GoogleLoginButton from '@common/GoogleLoginButton';
import KakaoLoginButton from '@common/KakaoLoginButton';
import ToolTipIcon from '@src/components/common/ToolTipIcon';

function OrganizerOnboarding() {
  const sliderRef = useRef<Slider>(null);
  const [oldSlide, setOldSlide] = useState(0);
  const [currentDirection, setCurrentDirection] = useState('');
  const [showLoginButtons, setShowLoginButtons] = useState(false);
  const [isKakaoBrowser, setIsKakaoBrowser] = useState(false);
  const [skipButtonState, setSkipButtonState] = useState(false);
  const settings = {
    dots: true,
    dotsClass: 'customDots',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToLastSlide = () => {
    sliderRef.current?.slickGoTo(4);
    setShowLoginButtons(true);
    setSkipButtonState(true);
  };

  useEffect(() => {
    const isKakao = navigator.userAgent.match('KAKAOTALK');
    setIsKakaoBrowser(Boolean(isKakao));
  }, []);

  useEffect(() => {
    if ((oldSlide >= 3 && currentDirection === 'left') || (skipButtonState && oldSlide !== 4)) {
      setShowLoginButtons(true);
    } else {
      setShowLoginButtons(false);
    }
    setSkipButtonState(false);
  }, [currentDirection, oldSlide]);

  return (
    <>
      <ToolTipIcon />
      <StSlider
        {...settings}
        ref={sliderRef}
        onSwipe={(direction) => {
          setCurrentDirection(direction);
        }}
        beforeChange={(index) => {
          setOldSlide(index);
        }}>
        {ORGANIZER_SLIDER_ITEMS.map((item, idx) => (
          <StOnboardingWrapper key={idx}>
            <StFlex>
              <StPageText>{ORGANIZER_SLIDER_ITEMS[item.id - 1].text}</StPageText>
              <ImageDiv
                src={ORGANIZER_SLIDER_ITEMS[item.id - 1].image}
                alt="주최자 온보딩 이모티콘"
                className="organizerEmoticon"
                fill={true}
              />
            </StFlex>
          </StOnboardingWrapper>
        ))}
      </StSlider>
      {!showLoginButtons ? (
        <StSkipButton>
          <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} handler={goToLastSlide} />
        </StSkipButton>
      ) : (
        <StSocialLoginButton>
          <StLoginButtonContainer isKakaoBrowser={isKakaoBrowser}>
            <StInfor>SNS 계정으로 티타임을 편리하게 이용해 보세요.</StInfor>
            {!isKakaoBrowser && <GoogleLoginButton />}
            <KakaoLoginButton />
          </StLoginButtonContainer>
        </StSocialLoginButton>
      )}
    </>
  );
}

export default OrganizerOnboarding;

const StSkipButton = styled.div`
  position: absolute;
  bottom: 18rem;
  top: 48rem;
  left: 50%;
  margin-top: 10rem;
  transform: translate(-50%);

  @media (max-height: 750px) and (max-width: 766px) {
    top: 43rem;
  }
  @media (max-height: 600px) {
    bottom: 3rem;
    @media (min-width: 766px) {
      top: 0;
      bottom: 6.4rem;
    }
  }
`;

const StSocialLoginButton = styled.div`
  position: absolute;
  top: 42rem;
  left: 50%;
  margin-top: 10rem;
  text-align: center;
  transform: translate(-50%);
  @media (max-height: 750px) and (max-width: 766px) {
    top: 35rem;
  }
  @media (min-width: 766px) {
    top: 37rem;
    bottom: 6.4rem;
  }
`;

const StSlider = styled(Slider)`
  display: flex;
  flex-direction: center;
  align-items: center;
  width: 100vw;
  height: 35rem;
  /* background-color: ${COLOR.IVORY_1}; */
  padding-top: 12.2rem;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-next {
    right: 0;
    bottom: 0;
  }

  .customDots {
    position: absolute;
    top: 4.1rem;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .customDots li {
    position: relative;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin: 0 0.4rem;
    padding: 0;
    cursor: pointer;
  }
  .customDots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    padding: 0.3rem;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .customDots li button:before {
    font-family: 'slick';
    font-size: 1rem;
    line-height: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    content: '•';
    text-align: center;
    color: ${COLOR.IVORY_6};
    -webkit-font-smoothing: antialiased;
  }
  .customDots li.slick-active button:before {
    position: absolute;
    top: 0.4rem;
    width: 2rem;
    height: 1rem;
    margin: 0rem 0rem 0rem -0.4rem;
    content: '';
    border-radius: 5rem;
    background-color: ${COLOR.ORANGE_1};
    color: ${COLOR.ORANGE_1};
  }
`;

const StPageText = styled.p`
  text-align: center;
  ${FONT_STYLES.NEXON_B_20};
  white-space: pre-wrap;

  @media (min-width: 766px) {
    ${FONT_STYLES.NEXON_B_20}
    margin-bottom: 3rem;
  }
`;

const StFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const StOnboardingWrapper = styled.div`
  overflow: hidden;
  height: 35rem;
  margin-top: 14rem; /* 임의 지정 */
  .organizerEmoticon {
    position: relative;
    width: 35rem;
    height: 25rem;

    @media (min-width: 766px) {
      position: relative;
      width: 36rem;
      height: 26rem;
      margin: -4rem 0 -8rem 0;
    }
  }
`;

const StInfor = styled.p`
  margin-bottom: 0.8rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12};
`;

const StLoginButtonContainer = styled.div<{ isKakaoBrowser: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 1rem;
  margin-top: ${(props) => (props.isKakaoBrowser ? '7.6rem' : '1rem')};
  @media (min-width: 766px) {
    bottom: -2rem;
  }
  button:first-child {
    margin-bottom: 1.6rem;
  }
`;
