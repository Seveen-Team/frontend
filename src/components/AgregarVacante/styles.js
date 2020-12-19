import styled from 'styled-components';

const WrapperModal = styled.div`
  border: 1px solid green;
  width: 50%;
  height: 50%;
  padding: 20px;
`;

const WrapperTitle = styled.div``;

const WrapperInputLabels = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const WrapperBottom = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WrapperButtom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TitleModal = styled.p`
  color: #182c3f;
  font-size: 34px;
  font-family: Babes, sans-serif;
`;

const Bottom = styled.button`
  margin-top: 15px;
  font-family: Babes, sans-serif;
  font-size: 26px;
  border-radius: 15px;
  outline: none;
  border: none;
  background-color: #98ca3e;
  color: #182c3f;
  width: 40%;
  height: 50px;
`;

export {
  WrapperModal,
  WrapperTitle,
  WrapperInputLabels,
  WrapperBottom,
  WrapperButtom,
  TitleModal,
  Bottom,
};
