import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { next } from '../store/modules/mbti';
import OrangeButton from './OrangeButton';

const MainImg = styled.img`
  width: inherit;
`;
const Header = styled.p`
  font-size: 3em;
`;
const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Start() {
  const dispatch = useDispatch();
  return (
    <>
      <Header>개발자 MBTI 조사 </Header>
      <MainImg src="/images/main.jpg" alt="메인페이지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에서 따라서 MBTI를 알아봅시다!
      </SubHeader>
      <OrangeButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
