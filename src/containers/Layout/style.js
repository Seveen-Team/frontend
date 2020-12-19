import styled from 'styled-components';

export const ContentChild = styled.section`
  position: absolute;
  top: 80px;
  right: 0;
  width: calc(100% - 220px);
  height: calc(100vh - 80px);
  padding: 2%;
  overflow-y: scroll;
  @media screen and (max-width: 578px) and (orientation: portrait) {
    width: 100%;
    height: calc(100vh - 80px);
  }
`;