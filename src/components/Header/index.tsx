import { ThemeContext } from "styled-components";
import { Container, Logo, TodoContent } from "./style";
import ReactSwitch from "react-switch";
import { useContext } from "react";

type Props = {
  onChangeTheme: () => void;
};

export function Header({ onChangeTheme }: Props) {
  const { name, colors } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <TodoContent>
          <Logo />
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
        </TodoContent>
      </Container>
    </>
  );
}
