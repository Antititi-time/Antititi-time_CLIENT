import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { Button1 } from '@src/assets/icons/index';
import { Button2 } from '@src/assets/icons/index';
import { Button3 } from '@src/assets/icons/index';
import { Button4 } from '@src/assets/icons/index';
import { Button5 } from '@src/assets/icons/index';
import { COLOR } from '@src/styles/color';
import { Dispatch, SetStateAction } from 'react';
import { StaticImageData } from 'next/image';

interface choiceType {
  setIndex: Dispatch<SetStateAction<number>>;
  setGrade: Dispatch<SetStateAction<number>>;
  setInput: Dispatch<SetStateAction<boolean>>;
  setChat: Dispatch<SetStateAction<(string | StaticImageData)[]>>;
}

function ChoiceAnswer({ setIndex, setInput, setChat, setGrade }: choiceType) {
  const numbers = [Button1, Button2, Button3, Button4, Button5];
  const handleChoiceBtn = (index: number) => {
    setIndex((prev) => prev + 1);
    setInput(false);
    setGrade(index + 1);
    setChat((prev) => prev.concat(`A${index + 1}점`));
  };

  return (
    <StChoiceInput>
      {numbers.map((Item: string, index: number) => (
        <StSelectButton key={index} onClick={() => handleChoiceBtn(index)}>
          <ImageDiv src={Item} alt={`버튼 ${index}번`} />
        </StSelectButton>
      ))}
    </StChoiceInput>
  );
}

export default ChoiceAnswer;

const StSelectButton = styled.button`
  display: inline-block;
`;

const StChoiceInput = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  align-items: center;
  width: 100%;
  height: 6.4rem;
  position: fixed;
  z-index: 1;
  gap: 0.7rem;
  bottom: 0;
  background-color: ${COLOR.WHITE_100};
  z-index: 1;
`;
