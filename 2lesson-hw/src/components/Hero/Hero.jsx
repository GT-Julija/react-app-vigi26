import "./Hero.css";

const Hero = ({ title, subtitle, color, children, className }) => {
  const heroClassName= () => {
    switch (color) {
      case "red":
        return "red-hero";
        case "blue":
          return "blue-hero";
          default:
            return "white-hero";
    }
  };
  return (
  <div className={heroClassName() + className}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <div>{children}</div>
     </div>
);
};
export default Hero;
