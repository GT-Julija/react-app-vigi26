import styled from "styled-components";

const PrimaryButton = styled.button`
  padding: 11px 15px;
  background: #f44336;
  border: 1px solid #f44336;
  border-radius: 4px;
  color: #ffffff;
`;

const SecondaryButton = styled(PrimaryButton)`
  background: #ffffff;
  color: #f44336;
`;

const Button = ({ color, type, onClick, children }) => {
  if (color === "secondary") {
    return <SecondaryButton>{children}</SecondaryButton>;
  } else {
    return <PrimaryButton>{children}</PrimaryButton>;
  }
};

export default Button;