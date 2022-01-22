import styled from 'styled-components';

// SN -> Sidebar Navigation
// HD -> Header
// MC -> Main
// AS -> Aside

export const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 71px auto 240px;
  grid-template-rows: 84px auto;

  grid-template-areas:
    'SN HD HD'
    'SN MC MC';

  height: 100vh;
`;
