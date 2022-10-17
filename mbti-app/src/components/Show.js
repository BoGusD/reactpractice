import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import OrangeButton from './OrangeButton';
import { reset } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Explaination = styled.p`
  font-size: 1.5em;
  color: #777;
`;

const Result = styled.p`
  font-size: 1.5em;
  color: yellowgreen;
`;
const Additional = styled.p`
  font-size: 2px;
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explaination = useSelector((state) => state.mbti.explaination[result]);
  const dispatch = useDispatch();

  const incCount = async () => {
    const resInc = await fetch('http://localhost:5000/data/inccount', {
      method: 'POST',
    });
    if (resInc.status === 200) {
      console.log(resInc.json());
    } else {
      throw new Error('통신 이상');
    }
  };
  return (
    <>
      <Header>당신의 개발자 Mbti 결과는?</Header>
      <Explaination>{explaination.text}</Explaination>
      <Result>{result}</Result>
      <Additional>이건 재미로 읽어보세요</Additional>
      <AdditionalImg src={explaination.img} alt="팩폭" />
      <OrangeButton
        text="다시 검색하기"
        clickEvent={() => {
          incCount();
          dispatch(reset());
        }}
      />
    </>
  );
}
