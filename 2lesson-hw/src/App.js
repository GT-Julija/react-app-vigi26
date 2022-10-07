import "./App.css"; 
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
  
  
  return (
    <div className="container">
     <Hero title="Title" 
     subtitle="Some about text in tue lines" 
     color="green" 
     className="center">
      <Button text="Button" type="button"/>
     
    </Hero>
    <div className="fruit-card-mini">
        <Card 
        imageUrl="https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg" 
    text="Orange"
    />
       </div>
       <div className="fruit-card-medium">
       <Card 
       imageUrl="https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg" 
       text="Orange"
       />
          </div>
          <Card 
       imageUrl="https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg" 
       text="Orange"
       className="fruit-card-mini"
       />
          </div>
  </Card>
  );
  }

export default App;


/* 


<div className="hero">
<Hero text="Title"/>
<Hero text="Some about text"/>
<Hero text="in tue lines"/>
<Button text="Button" type="submit"/>
<div className='button'>*/

/*<Hero text="Portfolio"/>
</div>*/
//<img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="img" />