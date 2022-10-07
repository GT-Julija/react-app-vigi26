import "./Hero.css";

const Hero = ({ title, subtitle, color, className, children }) => {
  const heroClassName = () => {
    switch (color) {
      case "red":
        return "red-hero";
      case "blue":
        return "blue-hero";
      case "green":
        return "green-hero";
      default:
        return "white-hero";
    }
  };
  // red-hero+center= red-herocenter
  // red-hero+ center= red-hero center
  // title = ""
  // title = undefined


  // su ifais
  if (!title && !subtitle) {
    return null;
    //arba return <div>nera title ir subtitle</div>;
  }

  return (
    <div className={`${heroClassName()} ${className}`}>
      {/* su ternary operatoriais ? : arba && */}
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
      {children && <div>{children}</div>}
    </div>
  );
};

export default Hero;

/* return (
    <div className={`${heroClassName()} ${className}`}>
       ///*jeigu title nera, nesukurk h1 */
        /*{title &&<h1>{title}</h1>}
       // {/*jeigu subtitle neta, nesukurk h2*/
        /*<h2>{subtitle}</h2>
        <div>{children</div>
    </div>
);  */