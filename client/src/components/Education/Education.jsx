import React from "react";
import { FaSchool, FaGraduationCap } from "react-icons/fa";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Education = () => {
  return (
    <Container id="education">
      <Slide direction="down">
        <h4>
          <span className="orange">Journey of</span> my
        </h4>
        <h1>Education</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaGraduationCap}
            title={"B Tech Computer Science and Engineering"}
            disc={`Completed my bachelor's degree with cgpa of 9.23 from Kalasalingam Academy of Research and Education.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaSchool}
            title={"Higher Secondary"}
            disc={`Completed my higher secondary education with an impressive 85% from Saliar Mahajana Higher Secondary School.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Education;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
