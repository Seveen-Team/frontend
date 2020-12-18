import styled from 'styled-components';

const WrapperCard = styled.div`
  padding: 10px;
  width: 30vw;
  border-radius: 40px;
  text-align: center;
  box-shadow: 3px 3px 10px black;
`;

const WrapperLevel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const WrapperBase = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const WrapperItem = styled.div`
  text-align: center;
  width: 49%;
`;

const Title = styled.p`
  width: 90%;
  padding: 5px;
  margin: 5px;
  border-radius: 50px;
  font-size: 24px;
  background-color: #182c3f;
  color: white;
  font-family: Babes, sans-serif;
`;

const Text = styled.p`
  font-family: Babes, sans-serif;
  font-size: 14px;
  color: #182c3f;
`;

const Info = styled.button`
  margin: 10px;
  font-family: Babes, sans-serif;
  font-size: 26px;
  border-radius: 50px;
  outline: none;
  border: none;
  background-color: #98ca3e;
  color: #182c3f;
  width: 70%;
  height: 50px;
`;

export {
  WrapperCard,
  WrapperLevel,
  WrapperBase,
  WrapperItem,
  Title,
  Text,
  Info,
};
