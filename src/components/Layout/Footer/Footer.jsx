// Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        {/* WhisperVerse  */}
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="/">
              <i className="far fa-question-circle">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Contact Us
                </span>
              </i>
            </FooterLink>
            <FooterLink href={`https://wa.me/${"8651406421"}`}>
              <i class="far fa-comment">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Chat with us
                </span>
              </i>
            </FooterLink>
            <FooterLink href={`tel:${"8651406421"}`}>
              <i className="fa fa-phone">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  +91 8651406421
                </span>
              </i>
            </FooterLink>
            <FooterLink href={`mailto:${"support@vv.com"}`}>
              <i className="far fa-envelope">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  support@internvalley.in
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Links</Heading>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/service">Service</FooterLink>
            <FooterLink href="/verify">Verify</FooterLink>
          </Column>
          <Column>
            <Heading>CampusValley</Heading>
            <FooterLink href="/">Our Story</FooterLink>
            <FooterLink href="/">Blogs</FooterLink>
            <FooterLink href="/tasks">Tasks</FooterLink>
            <FooterLink href="/term-and-condition">
              Terms & Condition
            </FooterLink>
            {/* <FooterLink href="/">Community</FooterLink> */}
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="" target="_blank">
              <i className="fab fa-linkedin">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Linkedin
                </span>
              </i>
            </FooterLink>
            <FooterLink href="" target="_blank">
              <i className="fab fa-telegram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Telegram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="" target="_blank">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="" target="_blank">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>

      <div
        style={{
          padding: "10px",
          textAlign: "center",
          color: "white",
          fontSize: "14px",
          marginTop: "20px",
        }}
      >
        <hr></hr>
        <p style={{ margin: "5px 10px", color: "black" }}>
          &copy; {2024} CampusValley. All rights reserved.
        </p>
        {/* <FooterLink href="/privacy-policy" style={{ margin: '0 10px' }}>Privacy Policy</FooterLink> */}
        {/* <FooterLink href="/term-and-condition">Terms & Condition</FooterLink> */}
      </div>
      <div style={{ marginBottom: "0px" }}> </div>
    </Box>
  );
};

export default Footer;
