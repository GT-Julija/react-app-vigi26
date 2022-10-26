import Notification from "./index";

export default {
  title: "Components/Notification",
  component: Notification,
};

export const DefaultNotification = () => (
  <Notification>Any text here</Notification>
);

export const DangerNotification = () => (
  <Notification type="danger">Any text here</Notification>
);

export const SuccessNotification = () => (
  <Notification type="success">Any text here</Notification>
);