import NavigationBar from "../../components/NavigationBar";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useContext, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Topbar from "../../components/Topbar";
import Card from "../../components/Card";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import { PetsContext } from "../../contexts/PetsProvider";
//import Button from "../../components/Button";
import { useParams } from "react-router-dom";

const mockedPetData = [
  {
    prescription: "Tick Vaccine",
    description: "Alfa beta",
    date: "2022-10-18",
  },
  {
    prescription: "Wick Vaccine",
    description: "Alfa beta",
    date: "2022-12-18",
  },
  {
    prescription: "Zick Vaccine",
    description: "Alfa beta",
    date: "2022-10-18",
  },
  {
    prescription: "Tick Vaccine",
    description: "Alfa beta",
    date: "2022-10-05",
  },
];

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const CardContainer = styled.div`
  width: 32%;
  margin-bottom: 16px;
`;

const Health = () => {
  const [health, setHealth] = useState([]);
  // useState reikes kad issaugoti duomenis
  // useEffect kad iskviesti is DB
  // setState(mockedPetData)
  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((resp) => resp.json())
      .then((response) => {
        setHealth(mockedPetData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { pets } = useContext(PetsContext);
  const { id } = useParams();
  const pet = pets.find((pet) => pet.id === Number(id));
  console.log(id);

  console.log(pets);
  return (
    <>
      <NavigationBar />
      <DefaultLayout>
        <Topbar>
          <Heading>{pet && pet.name}: Health records</Heading>
        </Topbar>

        <Cards>
          {health.map((health) => (
            <CardContainer>
              <Card
                title={health.prescription}
                subtitle={health.description}
                description={health.date}
              />
            </CardContainer>
          ))}
        </Cards>
      </DefaultLayout>
    </>
  );
};

export default Health;