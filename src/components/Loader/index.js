import React from "react";
import lottie from "lottie-web";
import loader from "./loader.json";
import {Container, Code} from './styles'

const Loader =() => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: loader
    });
  }, []);

  return (
    <Container>
      <Code id="react-logo"/>
    </Container>
  );
}

export default Loader;

