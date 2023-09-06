import styled from "styled-components";
import LogoSrc from "../../assets/images/masterMobilityLight.svg";

export const Container = styled.div`
  width: auto;
  height: 16rem;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: space-between;
`;

export const TodoContent = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
  padding-top: 80px;
`;

export const Logo = styled.div`
  background-image: url(${LogoSrc});
  background-repeat: no-repeat;
  background-position: center;
  height: 6rem;
`;
