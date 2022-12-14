import { useEffect, useRef } from "react";
import styled from "styled-components";
import AfterGraduate from "./about/AfterGraduate";
import EducationGoal from "./about/EducationGoal";
import Introduce from "./about/Introduce";
import Talent from "./about/Talent";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 300vh;
  `,
};
const About = () => {
  const pageRef = useRef(null);
  useEffect(() => {
    console.log(pageRef.current.offsetTop);
  }, []);

  return (
    <Style.Wrapper ref={pageRef}>
      <Introduce />
      <Talent />
      <EducationGoal />
    </Style.Wrapper>
  );
};
export default About;
