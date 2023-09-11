import { useTheme } from "styled-components";
import {
  Container,
  Logo,
  NameLight,
  SwitchContent,
  TodoContent,
} from "./style";
import ReactSwitch from "react-switch";

type Props = {
  onChangeTheme: () => void;
};

export function Header({ onChangeTheme }: Props) {
  const { name, colors } = useTheme();

  return (
    <>
      <Container>
        <TodoContent>
          <Logo />
          <SwitchContent>
            <NameLight>Light Mode</NameLight>
            <ReactSwitch
              onChange={onChangeTheme}
              checked={name === "light"}
              width={52}
              height={32}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={24}
              onColor={colors.lightChecked}
              offColor={colors.darkChecked}
            />
          </SwitchContent>
        </TodoContent>
      </Container>
    </>
  );
}
