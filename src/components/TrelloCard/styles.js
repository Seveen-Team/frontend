import styled from 'styled-components';

const WrapperTrelloCard = styled.div`
  border-radius: 30px;
  width: 25vw;
  height: 25vh;
  background-color: #c4c4c4;
`;

const WrapperTitle = styled.div`
  text-align: center;
`;

const WrapperLabels = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WrapperLabelLeft = styled.div``;

const WrapperLabelRight = styled.div``;

const Title = styled.p`
  font-size: 30px;
  font-family: Babes, sans-serif;
  color: #182c3f;
  padding: 10px;
`;

export {
  WrapperTrelloCard,
  WrapperTitle,
  WrapperLabels,
  WrapperLabelRight,
  WrapperLabelLeft,
  Title,
};
