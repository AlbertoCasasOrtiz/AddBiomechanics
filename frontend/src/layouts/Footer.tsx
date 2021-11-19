import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container-fluid">
          <Row>
            <Col md={12}>
              {currentYear} © Keenon Werling, Stanford University
            </Col>

            {/*
            <Col md={6}>
              <div className="text-md-end footer-links d-none d-md-block">
                <a href="/">Contact Us</a>
              </div>
            </Col>
            */}
          </Row>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
