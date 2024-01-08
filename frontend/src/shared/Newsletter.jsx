import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful travelling information.</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
              Congratulations on subscribing! Get ready to embark on a journey filled with exclusive travel insights and inspirations. Your inbox is now your gateway to a world of wanderlust. Stay tuned for our upcoming emails packed with insider tips, destination highlights, and special offers tailored just for you. Get ready to elevate your travel experiences and turn your wanderlust into unforgettable adventures. Let's start exploring together
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
                <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
