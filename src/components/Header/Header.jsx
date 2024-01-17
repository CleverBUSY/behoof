import React from "react";
import "../../styles/Header.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import CatalogBtn from "../ui/Buttons/CatalogBtn/CatalogBtn";
import IconButton from "@mui/material/IconButton";
import InputSearch from "../ui/inputs/SearchInput/InputSearch";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PersonIcon from "@mui/icons-material/Person";

const icons = [FavoriteBorderIcon, EqualizerIcon, PersonIcon];

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header__logo">
              <span>
                <Logo />
              </span>
            </div>
            <div className="header__text">
              <p>
                Лучшие цены <br /> в интернет-магазинах{" "}
              </p>
            </div>
            <div className="header__catalog">
              <CatalogBtn />
            </div>
            <div className="header__search">
              <InputSearch className="input_" />
            </div>
            <div className="header__right">
              {icons.map((Icon, index) => (
                <div key={index}>
                  <IconButton
                    type="button"
                    sx={{
                      p: "10px",
                      height: 54,
                      width: 54,
                      borderRadius: "8px",
                      
                    }}
                    aria-label="search"
                  >
                    <Icon />
                  </IconButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
