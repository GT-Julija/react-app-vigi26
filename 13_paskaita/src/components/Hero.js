import styled from "styled-components";

const Background = styled.div`
background: green;
height: 300px;
`;

const Hero = ({title, subtitle}) => {
    return (
        <Background>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </Background>
    );
};
export default Hero;
