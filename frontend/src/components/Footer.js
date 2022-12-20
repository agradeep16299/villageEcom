import React from "react";

import styled from "styled-components";

import { FaFacebook, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      

      {/* footer section  */}

      <footer >
       

         
          {/*1st column  */}
          <div className="container grid grid-four-column ">
          <div className="footer-about">
            <h3>Village bazar</h3>
            <p>we serve daily uses product .All products are home delivary available</p>
          </div>
           {/*  2nd column */}
           <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="https://formspree.io/f/xkneojrb" method="POST">
              <input
                type="email"
                name="useremail"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
              <a href="https://www.facebook.com/profile.php?id=100085997845379" target="_blank">
                <FaFacebook className="icons" />
                </a>
              </div>
              
              <div>
                <a href="https://instagram.com/villagebazer?igshid=YmMyMTA2M2Y=" target="_blank">
                <FaInstagram className="icons" />
                </a>
              </div>
              
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Helpline Number</h3>
            <h3>+91 8927159487</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} copyright AgradeepRakshit || All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`

.container {
  max-width: 120rem;
  margin: 0,auto;
}
.grid {
  display: grid;
  gap: 9rem;
}
.grid-four-column{
  grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}
 
  footer {
    padding: 10rem 0 9rem 0;
    background-color: #b98150;
    h3 {
      color:black;
      margin-bottom: 1 rem;
    }
    p {
      color: black;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid #fff;
        .icons {
          color: #fff;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .grid-two-column {
      grid-template-columns: repeat(2, 1fr);
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: yellow;
        height: 0.1px;
      }
    }
  }
  @media (max-width: 580px) {
    .contact-short {
      max-width: 80vw;
      padding: 2rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    .container {
      max-width: 100rem;
      margin: 0 auto;
    }
    .grid {
      display: grid;
      gap: 1rem;
    }

.grid-four-column{
      grid-template-columns:.8fr 1fr;
      gap:.3rem;
      
    }
    .footer-about{
      padding-left:0rem;
    }
    footer .footer-bottom--section {
      padding-top: 2.2rem;
    }
    .footer-social--icons {
      display: flex;
      gap:0.4rem;
      div {
        padding: 0.7rem;
        border-radius: 20%;
        border: 1.4px solid #fff;
        .icons {
          color: #fff;
          font-size: .5rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding: 3.2rem;
    }
  }
`;

export default Footer;