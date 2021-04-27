import React from "react";
import styled from "styled-components";
import DropdownTabs from "./GithubUI/DropdownTabs";
import ForestRoad from "./ForestRoadCompany.png";

const Banner = () => {
  return (
    <BannerContainer>
      <DropdownTabs />
      <Card>
        <div class="card_body">
          <div class="card_body-gradient"></div>
          <img
            src={ForestRoad}
            alt=""
            style={{
              right: "30px",
              bottom: "10%",
              position: "absolute",
              height: "70px",
              width: "70px",
              mixBlendMode: "multiply",
              opacity: 0.55
            }}
          />
          <div class="description">
            <h1>CCIV.U</h1>
            <h2>CHURCHILL ACQUISITION CORP II</h2>
          </div>
          <div class="footer">
            <h3>
              <b style={{ color: "rgb(11, 216, 45)" }}>12.33</b>
              <span
                style={{
                  fontSize: "14px",
                  marginLeft: "5px",
                  color: `rgb(11, 216, 45)`
                }}>
                +1.22 (10.22%)
              </span>
            </h3>
            <div style={{ marginTop: "-2px", color: "rgba(255, 255, 255, 0.5)", fontSize: "11px" }}>
              updated 12sec ago
            </div>
          </div>
        </div>
      </Card>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  height: 45vh;
  border-bottom: 1px solid black;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  background-image: url(https://s-media-cache-ak0.pinimg.com/originals/37/e6/64/37e664b39146247e2312343115ab165a.png);
  background-size: cover;
  background-size: auto 800px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const Card = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  user-select: none;
  position: absolute;
  right: 18vw;
  bottom: 60vh;
  height: 200px;
  width: 360px;
  box-shadow: -25px 25px 60px 5px rgba(0, 0, 0, 0.5), -60px 60px 100px 13px rgba(0, 0, 0, 0.27);
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  .card_body {
    position: absolute;
    right: 0px;
    display: flex;
    align-items: flex-start;
    height: 200px;
    width: 360px;
    box-shadow: -25px 25px 60px 5px rgba(0, 0, 0, 0.5), -60px 60px 100px 13px rgba(0, 0, 0, 0.27);
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
  .card_body .description,
  .card_body .footer {
    position: absolute;
    left: 35px;
    color: transparent;
    transition: all 0.5s ease-in-out 0.5s;
  }
  .card_body .description {
    bottom: 100px;
  }
  .card_body .footer {
    bottom: 35px;
  }
  .card_body h3,
  .card_body h2,
  .card_body h1 {
    text-transform: uppercase;
    color: white;
  }
  .card_body h3 {
    font-weight: 300;
    color: white;
  }
  .card_body h2 {
    font-weight: 700;
    font-size: 17px;
    color: white;
  }
  .card_body h1 {
    font-weight: 600;
    font-size: 34px;
    color: white;
  }
  .card_body b {
    font-weight: 600;
    margin-right: 5px;
    color: white;
  }
  .card_body-gradient {
    position: absolute;
    top: -250px;
    height: 500px;
    width: 100%;
    background: linear-gradient(to bottom, rgba(201, 230, 255, 0.19) 180px, #0600fe 500px);
    transition: top 0.3s ease-in-out 0.3s;
  }
  .card_body.active {
    height: 510px;
  }
  .card_body.active .card_body-gradient {
    top: 0;
  }
  .card_body.active .description {
    top: 280px;
    color: #fff;
  }
  .card_body.active .footer {
    bottom: 35px;
    color: #fff;
  }
`;
