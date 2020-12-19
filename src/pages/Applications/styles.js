import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 25px;
  margin: 0 0 10px 0;
  height: 40px;
`;

export const ApplicationsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`;

export const ListContainer = styled.div`
  width: 340px;
  height: 500px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
`;

export const Subtitle = styled.h2`
  width: 100%;
  padding: 10px 20px;
  background-color: #182c3f;
  color: white;
`;

export const List = styled.ul`
  padding: 10px 20px;
  list-style: none;
`;

export const Container = styled.div`
  height: calc(100% - 50px);
  overflow-y: scroll;
`;