import styled from "styled-components";
import LogoSrc from "../../assets/images/masterMobilityLight.svg";

export const Container = styled.div`
  display: flex;
  width: auto;
  height: 12rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Logo = styled.div`
  background-image: url(${(props) => props.theme.colors.imageHeader});
  background-repeat: no-repeat;
  background-position: center;
  height: 6rem;
  width: 600px;
`;

export const TodoContent = styled.div`
  display: flex;
  margin: auto;
  max-width: 980px;
  padding: 10px;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;
export const NameLight = styled.h1`
  color: ${(props) => props.theme.colors.textMode};
  padding-bottom: 7px;
  font-size: 1.5rem;
`;

export const SwitchContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
