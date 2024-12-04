import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    
    headerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
    });

    // Animate sections with a staggered reveal
    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div data-theme="dark" className="card-holder">
      <div className="term-container">
        <div
          className="term-services mt-6"
          style={{ position: "relative", marginTop: "calc(130px)" }}
        >
        
          <h1
        ref={headerRef}
        style={{
          fontWeight: "bolder",
          color: "#017BFE",
          fontSize: "3rem",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        Privacy Policy of Job Huntings
      </h1>


          <div ref={contentRef}>
            <p style={{color:"#017BFE" }}>Updated on: 14th April 2024</p>
            <br />
            <p>
              Developnators operates the jobhuntings.developnators.com website,
              which provides the SERVICE.
            </p>

            <p>
              This page is used to inform website visitors regarding our policies
              with the collection, use, and disclosure of Personal Information if
              anyone decided to use our Service, the jobhuntings website.
            </p>

            <p>
              If you choose to use our Service, then you agree to the collection
              and use of information in relation with this policy. The Personal
              Information that we collect are used for providing and improving the
              Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>

            <p>
              The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, which is accessible at
              jobhuntings.developnators.com, unless otherwise defined in this
              Privacy Policy.
            </p>

            <h2 style={{ fontWeight: "bolder" ,color:"#017BFE" }}>Information Collection and Use</h2>

            <p>
              For a better experience while using our Service, we may require you
              to provide us with certain personally identifiable information,
              including but not limited to your name, phone number, and postal
              address. The information that we collect will be used to contact or
              identify you.
            </p>

            <h2 style={{ fontWeight: "bolder",color:"#017BFE"  }}>Log Data</h2>

            <p>
              We want to inform you that whenever you visit our Service, we
              collect information that your browser sends to us that is called Log
              Data. This Log Data may include information such as your computer's
              Internet Protocol ("IP") address, browser version, pages of our
              Service that you visit, the time and date of your visit, the time
              spent on those pages, and other statistics.
            </p>

            

            <h2 style={{ fontWeight: "bolder",color:"#017BFE"  }}> <Link to ="/contact" >  Contact Us </Link></h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
