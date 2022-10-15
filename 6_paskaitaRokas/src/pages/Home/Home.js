import Breathe from "../../components/Breathe/Breathe";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/Table/Table";

const Home = () => {
  const tableHeadings = ["Id", "Name", "Surname", "Email"];
  const tableData = [
    { id: 1, name: "Julija", surname: "GT", email: "julija@gmail.com" },
    { id: 2, name: "Liucija", surname: "TG", email: "liucija@gmail.com" },
  ];

  const hanldRowClick = (row) => {
    console.log(row);
    // Detele functionality
  };

  return (
    <div>
      <Navbar />
      <h1>Welcome home</h1>
      <Table
        headings={tableHeadings}
        data={tableData}
        onRowClick={hanldRowClick}
      />
      <br />
      <Button>Home button</Button>
      <br />
      <Breathe />
    </div>
  );
};

export default Home;
