import styled from "styled-components";

export const ContainerStyled = styled.div`
  max-width: 767px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
  @media screen and (min-width: 1180px) {
    max-width: 1180px;
  }
`;
