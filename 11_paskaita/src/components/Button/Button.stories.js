import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
};

export const PrimaryButton = () => <Button>Any text here</Button>;
export const SecondaryButton = () => (
  <Button color="secondary">Any text here</Button>
);