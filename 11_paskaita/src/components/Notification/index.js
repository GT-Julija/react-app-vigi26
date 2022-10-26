import styled from "styled-components";

const DefaultNotification = styled.div`
  padding: 16px;
  min-width: 120px;
  background: grey;
  border-radius: 4px;
  color: white;
`;

const DangerNotification = styled(DefaultNotification)`
  background: red;
`;

const SuccessNotification = styled(DefaultNotification)`
  background: green;
`;

const Notification = ({ children, type }) => {
  if (type === "danger") {
    return <DangerNotification>{children}</DangerNotification>;
  } else if (type === "success") {
    return <SuccessNotification>{children}</SuccessNotification>;
  } else {
    return <DefaultNotification>{children}</DefaultNotification>;
  }
};

export default Notification;