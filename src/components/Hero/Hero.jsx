import React from "react";
import "../../styles/Hero.css"
import Button from "../ui/Buttons/Button/Button";
import {ReactComponent as Icon} from "../../assets/svg/arrowIcon.svg"


const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero__banner_large">
        <h1>
          <span>1.8 млн</span> товаров в <span>2272</span> магазинах найди,
          сравни, выберай!
        </h1>
        <Button icon={
        <span style={{paddingLeft: 8}}>
            <Icon/>
        </span>
        }>Перейти к категориям </Button>
      </div>
      <div className="hero__banner_small">
        <h2>
          <span>Топ-10</span> смартфонов 2023 года
        </h2>
        <Button icon={<Icon/>}>Смотреть</Button>
        <div className="bg__banner_small"></div>
      </div>
    </div>
  );
};

export default Hero;
