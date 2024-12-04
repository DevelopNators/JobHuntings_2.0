import { useEffect, useRef } from "react";
import gsap from "gsap";

const TermAndService = () => {
  const titleRef = useRef();
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Scroll down to the last section smoothly after animations
    sectionsRef.current[sectionsRef.current.length -5]?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });

    // Animate the title
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Animate each section with a staggered effect
    gsap.from(sectionsRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.3,
      delay: 0.5,
    });
  }, []);

  return (
    <div data-theme="light" className="card-holder">
      <div
        className="term-container"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <div
          className="term-services mt-6"
          style={{ position: "relative", marginTop: "calc(120px)" }}
        >
          {/* Title */}
          <h1
            ref={titleRef}
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#017BFE",
            }}
          >
            OUR TERMS AND SERVICES
          </h1>

          {/* Section Content */}
          <div ref={(el) => (sectionsRef.current[0] = el)}>
            <h2 style={{ color: "#017BFE" }}>Disclaimer</h2>
            <p>
              We want to make your experience with Job Hunters as smooth and
              transparent as possible. Please take a moment to read through our
              Terms of Service. By using Job Hunters, you agree to comply with
              these terms.
            </p>
            <hr />
          </div>

          <div ref={(el) => (sectionsRef.current[1] = el)}>
            <h2 style={{ color: "#017BFE" }}>Information Provider</h2>
            <p>
              - We are an information provider for job openings and are not
              associated with any company/agency/agent whose jobs are posted on
              Job Hunters.
              <br />
              - All logos are trademarks of their respective owners.
              <br />
              - Users should verify all information on the official authority
              website regarding company/salary/qualification/last date before
              applying for any jobs.
            </p>
            <hr />
          </div>

          <div ref={(el) => (sectionsRef.current[2] = el)}>
            <h2 style={{ color: "#017BFE" }}>Guarantees and Warranties</h2>
            <p>
              - Job Hunters offers no guarantee nor warranties that there will
              be a satisfactory response or any response at all.
              <br />
              - We neither guarantee nor offer any warranty about the
              credentials, bonafides, status, or otherwise of the prospective
              employer/organization.
              <br />
              - Job Hunters will not be held liable for the loss of any data,
              technical or otherwise, acts of god, as well as reasons beyond our
              control.
            </p>
            <hr />
          </div>

          <div ref={(el) => (sectionsRef.current[3] = el)}>
            <h2 style={{ color: "#017BFE" }}>User Representation</h2>
            <p>
              - By using Job Hunters, the user represents that they are not a
              minor and are not under any legal or other disability that limits
              their ability to comply with these terms.
              <br />
              - The user further represents that they are not purchasing the
              products/services for resale to others without Job Hunters' prior
              written consent.
            </p>
            <hr />
          </div>

          <div ref={(el) => (sectionsRef.current[4] = el)}>
            <h2 style={{ color: "#017BFE" }}>Termination</h2>
            <p>
              - The user agreement between a user/subscriber and Job Hunters
              will be treated as terminated in certain events as agreed upon by
              the parties mutually.
            </p>
            <hr />
          </div>

          <div ref={(el) => (sectionsRef.current[5] = el)}>
            <h2 style={{ color: "#017BFE" }}>Educate Yourself Against Fraud/Scams</h2>
            <p>
              - We encourage you to educate yourself against the most common
              kinds of Internet and Email frauds.
              <br />
              - Phishing and spoofing are two types of email scams. Please be
              cautious and verify the authenticity of any emails you receive.
              <br />
              - For more information about protecting yourself against Phishing
              scams, visit:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndService;
