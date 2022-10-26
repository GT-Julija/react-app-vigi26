import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NightModeContext } from "../../contexts/NightModeProvider";
import { LangModeContext } from "../../contexts/LangModeProvider";

const Container = styled.div`
  padding: 20px 60px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #eb5d05;
  font-size: 30px;
  font-weight: 500px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 18px;
  color: #eb9605;
  &:hover {
    color: #eb5d05;
  }
`;

const RightContainer = styled.div`
  display: flex;
  color: gray;
  &:hover {
    color: black;
  }
`;
const ModeContainer = styled.div`
  padding: 0 12px;
  color: gray;
  &:hover {
    color: black;
  }
`;

const NavigationBar = () => {
  const { isNightMode, toggleMode } = useContext(NightModeContext);
  const { isLangLit, toggleLit } = useContext(LangModeContext);

  console.log(isNightMode);
  return (
    <Container style={{ background: isNightMode ? "#3e281" : "#ffffff" }}>
      <Logo>vetbee</Logo>
      <RightContainer>
        <nav>
          <StyledLink to="/">Pets</StyledLink>
          <StyledLink to="/medications">Medications</StyledLink>
        </nav>

        <div
          onClick={toggleMode}
          style={{ color: isNightMode ? "#ffffff" : "#000000" }}
        >
          {isNightMode ? "Night" : "Day"}
        </div>
        <ModeContainer>
          <div onClick={toggleLit}>{isLangLit ? "LT" : "EN"}</div>
        </ModeContainer>
      </RightContainer>
    </Container>
  );
};

export default NavigationBar;
