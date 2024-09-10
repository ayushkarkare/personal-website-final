import React, { useState, useEffect } from "react";
import Card from "./card";
import "./homepage.css";
import profilePic from "./Images/pfp.jpg";
import bike1 from "./Images/bike1.png.jpg";
import bike2 from "./Images/bike2.png";
import bike3 from "./Images/bike3.jpg";
import bike4 from "./Images/bike4.jpg";
import bike5 from "./Images/bike5.jpg";
import biovolt1 from "./Images/biovolt1.png";
import biovolt2 from "./Images/biovolt2.jpg";
import biovolt3 from "./Images/biovolt3.png";
import biovolt4 from "./Images/biovolt4.JPG";
import biovolt5 from "./Images/biovolt5.JPG";
import biovolt6 from "./Images/biovolt6.jpg";
import biovolt7 from "./Images/biovolt7.jpg";
import biovolt8 from "./Images/biovolt8.jpg";
import vex1 from "./Images/vex1.jpg";
import vex2 from "./Images/vex2.png";
import vex3 from "./Images/vex3.png";
import vex4 from "./Images/vex4.jpeg";
import vex5 from "./Images/vex5.jpg";
import vex6 from "./Images/vex6.jpg";
import vex7 from "./Images/vex7.jpeg";
import vex8 from "./Images/vex8.jpg";
import vex9 from "./Images/vex9.jpg";
import vex10 from "./Images/vex10.jpg";
import vex11 from "./Images/vex11.jpg";
import mcbt1 from "./Images/mcbt1.JPG";
import mcbt2 from "./Images/mcbt2.JPG";
import mcbt3 from "./Images/mcbt3.JPG";
import mcbt5 from "./Images/mcbt5.jpg";
import mcbt6 from "./Images/mcbt6.jpg";
import gallery1 from "./Images/1.png";
import gallery2 from "./Images/2.png";
import resume from "./Images/resume.png";

function ImageCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Add a fallback if images are empty
  if (images.length === 0) {
    return <div></div>;
  }

  return (
    <div className="carousel-container">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>
  );
}

// ProjectCard Component for reusability
function ProjectCard({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`project1 ${
        isExpanded ? "project1-expanded" : "hover-effect"
      }`}
      onClick={toggleExpand}
    >
      <div className="project1-header">{title}</div>
      <div
        className={`project-content ${isExpanded ? "scroll-in" : "scroll-out"}`}
      >
        <ImageCarousel />
        {content}
      </div>
    </div>
  );
}

// Homepage Component
function Homepage() {
  const aspirations = [
    "Aerospace Engineer",
    "Product Developer",
    "Robotics Specialist",
    "Tech Entrepreneur",
    "F1 Race Engineer",
    "Innovator",
    "",
  ];

  const [aspirationIndex, setAspirationIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScrolling(true);
      setTimeout(() => {
        setAspirationIndex((prevIndex) => (prevIndex + 1) % aspirations.length);
        setIsScrolling(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [aspirations.length]);

  return (
    <div className="homepage">
      <div id="about" className="section-one">
        <section className="home">
          <div className="home-content">
            <h1 className="home-title">
              <div className="name">
                <span className="first-name">Ayush Karkare</span>
              </div>
              <span className="university-text">AAE @ Purdue University</span>
            </h1>
            <div className="profile-section">
              <div className="profile-pic-container">
                <img src={profilePic} alt="Profile" className="profile-pic" />
              </div>
              <div className="profile-info">
                <div className="aspiration-carousel">
                  <span>I am an aspiring: </span>
                  <span
                    className={`aspiration ${
                      isScrolling ? "scroll-out" : "scroll-in"
                    }`}
                  >
                    {aspirations[aspirationIndex]}
                  </span>
                </div>
                <div className="textbox">
                  <p>
                    Hi there! My name is Ayush Karkare and I am currently a
                    student at Purdue University pursuing my Bachelor's Degree
                    in Aeronautical and Astronautical Engineering. My passions
                    lie in product development/design, robotics, tech, and
                    entrepreneurship.
                  </p>
                  <p>
                    I am always looking for new gizmos to build and new problems
                    to solve. I am open to pursuing a career in a variety of
                    sectors, like defense and aerospace, motorsport, and if the
                    opportunity arises tech startups.
                  </p>
                  <p>
                    In my free time I like to play racket sports (tennis,
                    badminton, pickleball), keep up with motorsports like F1,
                    and go on outdoor adventures. As I continue my college
                    journey, I am excited to further develop my skills and shape
                    the world of tomorrow!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="projects" className="projects-entrance">
          <text className="proj-entrance-text">
            You are now entering ( Projects ) section{" "}
          </text>
          <text className="proj-counter"> ● 01/04</text>
        </div>
      </div>
      <div className="section-two">
        <section className="projects">
          <div className="projects-number">01</div>
          <div className="projects-header">Projects</div>
        </section>
        {/* First Project */}
        <ProjectCard
          title="Electric Bike Conversion Project"
          content={
            <>
              <ImageCarousel images={[bike1, bike2, bike3, bike4, bike5]} />
              <p>
                The project began with the goal of addressing the transportation
                difficulties faced by students on large campuses like Purdue
                University, where long walks and challenging weather can make
                commuting inefficient. To solve this, I started converting a
                standard bike into an electric one, focusing on creating a
                balance between speed, torque, and practicality. The design
                utilizes a multi-stage belt drive system, powered by a Flipsky
                190kV motor and a Ryobi battery, selected for its ease of
                swapping during use.
                <span className="bold"> Siemens NX</span> was instrumental in
                the 3D modeling of the custom components, allowing for precise
                design and efficient integration of off-the-shelf parts from{" "}
                <span className="bold">standard part libraries.</span>
              </p>
              <p>
                The electrical system was a key aspect of the build, requiring
                careful tuning for optimal performance. I used a{" "}
                <span className="bold"> PID motion control algorithm</span> to
                fine-tune the motor, ensuring smooth acceleration and speed
                regulation. The Flipsky motor was paired with a{" "}
                <span className="bold">
                  VESC (Vedders Electronic Speed Controller)
                </span>
                , which provided real-time feedback and allowed me to dial in
                precise control over motor behavior. Once the motor was
                performing as needed, I moved on to the mechanical aspects,
                where I modeled the bike frame in Siemens NX to ensure accurate
                fitting of the motor mount and belt drive system. The
                multi-stage belt system was engineered to deliver{" "}
                <span className="bold">
                  both speed and torque while minimizing weight and maintaining
                  stability.
                </span>
              </p>
              <p>
                <span className="bold">Rapid prototyping</span> played a crucial
                role in testing and refining the mechanical components. Using a
                3D printer, I produced initial prototypes of the motor mount and
                belt system, which allowed me to quickly identify areas for
                improvement and make adjustments to the design. This iterative
                process proved invaluable in fine-tuning the assembly for
                optimal performance. Currently, I am developing a custom rear
                wheel assembly that includes a segmented gear system to address
                the challenges of limited mounting points, with continued
                prototyping and testing underway.
              </p>
              <p>
                Looking ahead, I plan to further enhance the system by adding
                waterproof housings for the electronic components to protect
                them from environmental elements. Future upgrades include{" "}
                <span className="bold">
                  integrating gyroscope sensors, regenerative braking, and
                  variable belt ratios
                </span>
                , which will significantly improve performance. These planned
                developments will move the project beyond its initial phase,
                adding functionality and robustness to the electric bike
                conversion.
              </p>
            </>
          }
        />

        {/* Second Project */}
        <ProjectCard
          title="Biophotovoltaics Product Research and Development"
          content={
            <>
              <ImageCarousel
                images={[
                  biovolt1,
                  biovolt2,
                  biovolt3,
                  biovolt4,
                  biovolt5,
                  biovolt6,
                  biovolt7,
                  biovolt8,
                ]}
              />
              <p>
                Biovolt is an innovative energy solution that harnesses
                photosynthesis to generate electricity while allowing farmers to
                grow crops. It addresses the land-use dilemma farmers face
                between growing crops or installing solar farms. By using
                biophotovoltaic technology, Biovolt captures electrons from
                plants and soil microbes, converting them into usable
                electricity. With its modular and customizable design, Biovolt
                optimizes land use for energy generation without sacrificing
                agricultural production. For the past four years, I’ve worked
                with my team to develop Biovolt, and we are now collaborating
                with Purdue Innovates to bring the product to market.
              </p>
              <p>
                During the development process, I contributed extensively to the
                electrical design and construction of Biovolt’s components. My
                work included{" "}
                <span className="bold">configuring the wiring system</span> to
                optimize both voltage and current by using a combination of
                series and parallel circuits. The system captures electrons
                through a coiled copper wire (acting as the cathode) and zinc
                anodes, which were strategically placed to maximize energy
                capture from the soil. One of the key challenges was reducing
                internal resistance within the system, which I addressed by
                experimenting with different configurations of wiring and
                materials. In addition, I helped design the panel structure
                using <span className="bold">Fusion 360</span>, and employed a{" "}
                <span className="bold">
                  laser cutter to create precise parts
                </span>
                , such as the plywood frames for the modular panels. This
                allowed us to create a robust and scalable system that can be
                easily installed and maintained.
              </p>
              <p>
                I also focused on the prototyping and assembly of Biovolt. Using
                a combination of laser-cut plywood, soil, and landscaping
                fabric, I assembled the individual cells of each panel, making
                sure the electrodes were properly mounted and the electrical
                connections were secure. The system’s modular design allows each
                panel to function independently, ensuring that if one cell
                fails, the rest of the system continues to operate. To improve
                the longevity of the system, the panels were coated with epoxy
                for waterproofing. The final prototype was tested using a
                combination of moss and soil, generating approximately{" "}
                <span className="bold">1.56 volts across 19 cells</span>, with
                the potential for increased output under prolonged sunlight and
                proper watering.
              </p>
              <p>
                Looking ahead, the development of Biovolt continues, with plans
                to enhance the system’s efficiency and scalability. Future
                iterations will focus on improving the materials for enhanced
                durability and optimizing the design for large-scale
                agricultural use. Biovolt has already garnered attention and
                funding through competitions such as the Purdue University
                Moonshot Pitch Challenge and JMEC, where we secured{" "}
                <span className="bold">$8,500</span> for further development.
                With its ability to provide both sustainable energy and
                agricultural benefits, Biovolt represents a promising solution
                for the future of farming and renewable energy.
              </p>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/dv-TlFil3mI?si=QztFZrG70e3_jH7T"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/A19ljB20jMQ?si=t4oOD6gfw4Xq4iA3"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <p>
                Read more about Biovolt's Participation at the Moonshot Pitch
                Competition:{" "}
                <a
                  href="https://www.purdue.edu/newsroom/2023/Q4/purdue-students-win-monetary-prizes-for-innovative-solutions-to-global-problems-during-moonshot-pitch-challenge//"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ff3d00" }} // Change color here
                  onClick={(e) => e.stopPropagation()} // Prevent event propagation
                >
                  News Story
                </a>
              </p>
            </>
          }
        />

        {/* Third Project */}
        <ProjectCard
          title="81Y Spin Up Competition Robot"
          content={
            <>
              <ImageCarousel
                images={[
                  vex1,
                  vex2,
                  vex3,
                  vex4,
                  vex5,
                  vex6,
                  vex7,
                  vex8,
                  vex9,
                  vex10,
                  vex11,
                ]}
              >
                {" "}
              </ImageCarousel>
              <p>
                As part of Team 81Y VEXMEN Cypher, my team and I engineered a
                robot for the VEX Robotics Spin Up competition, focusing on
                shooting discs into goals and controlling field elements. Over
                the course of the project, we rigorously applied the engineering
                design process in{" "}
                <span className="bold">iterative sprints</span>, documented in
                detail in our{" "}
                <span className="bold">engineering design notebook</span>. This
                allowed us to manage the project effectively while ensuring that
                each subsystem was designed, built, and tested to meet specific
                performance criteria.
              </p>
              <p>
                One of the core design elements involved leveraging{" "}
                <span className="bold">Fusion 360 for CAD modeling</span>. The
                use of this software allowed us to meticulously design and
                visualize the robot’s complex components, such as the
                drivetrain, flywheel, and intake system, ensuring full
                compatibility and integration of the various mechanical systems.
                Each subsystem, from the drivetrain to the intake rollers, was
                modeled, and their interactions were optimized through multiple
                iterations to ensure smooth operation. This step was critical in
                achieving a robot that performed seamlessly on the field.
              </p>
              <p>
                A significant part of our development process was focused on the{" "}
                <span className="bold">flywheel mechanism</span>. After
                selecting the flywheel as our shooting system, we performed a{" "}
                <span className="bold">
                  detailed projectile motion analysis
                </span>{" "}
                to fine-tune its operation. By{" "}
                <span className="bold">
                  modeling the physics of disc trajectories and adjusting
                  variables
                </span>{" "}
                such as motor speed and the angle of release, we optimized the
                flywheel for consistent, high-precision shooting. This allowed
                our robot to score in the high goal effectively, a crucial part
                of the game.
              </p>
              <p>
                Our journey also included applying problem-solving strategies to{" "}
                <span className="bold">improve component reliability</span>, as
                seen in our work on the
                <span className="bold">mechanism and pneumatic systems</span>.
                The iterative process led to several improvements that not only
                enhanced the performance but also ensured the robustness of our
                design. This continuous iteration helped us achieve{" "}
                <span className="bold">consistency and precision</span>, which
                were key to winning major awards.
              </p>
              <p>
                Throughout the season, our robot and design approach were
                recognized on multiple levels. We were awarded the{" "}
                <span className="bold">
                  Design Award at the VEX Worlds Championship
                </span>
                , which highlights excellence in the ideation, development, and
                functionality of robotic components. We also earned the{" "}
                <span className="bold">
                  Design Award at the Kalahari Signature Event
                </span>{" "}
                and took home the{" "}
                <span className="bold">National Championship title</span>,
                demonstrating our team's innovative approach and technical
                expertise. Our ability to consistently follow a disciplined
                design process, from CAD modeling to flywheel optimization,
                ultimately led to our success on the world stage.
              </p>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Pn8gyKEJnH8?si=Vr1msf8KGuwePCcY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/g3mWVeP3xBc?si=qqi2rIjv7Xpkx226"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <p>
                View all of 81Y Cypher's Awards and Accomplishments :{" "}
                <a
                  href="https://www.robotevents.com/teams/V5RC/81Y"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "#ff3d00" }} // Change color here
                  onClick={(e) => e.stopPropagation()} // Prevent event propagation
                >
                  81Y Awards and Accomplishments
                </a>
              </p>
            </>
          }
        />

        <ProjectCard
          title="Mei Cha/The Lemon Scholars"
          content={
            <>
              <ImageCarousel images={[mcbt1, mcbt2, mcbt3, mcbt5, mcbt6]}>
                {" "}
              </ImageCarousel>
              <p>
                During my junior year of high school, I founded Mei Cha, a
                bubble tea business that quickly gained popularity by offering
                refreshing and culturally enriching beverages at various
                community events in the Greater Chester County area. As the
                <span className="bold"> CEO and founder</span>, I oversaw every
                aspect of the business, from financial management and HR to
                marketing, public relations, and operations. My team and I
                successfully managed the company, bringing Mei Cha from a pop-up
                operation at local events to{" "}
                <span className="bold">
                  opening a brick-and-mortar location
                </span>{" "}
                during my senior year. This transition allowed us to maintain
                consistent operations while expanding our reach and creating
                deeper connections with our customers. Mei Cha emphasized
                high-quality, customizable drinks, which helped solidify our
                reputation and allowed us to stand out in a competitive market.
              </p>
              <p>
                As CEO, I played a critical role in developing and executing the
                vision for Mei Cha on a daily basis. I managed{" "}
                <span className="bold">
                  project timelines, marketing initiatives, and customer service
                </span>
                , ensuring that our team delivered a consistent and high-quality
                product. By leveraging social media marketing and guerilla
                campaigns, I helped drive growth and increase brand recognition,
                particularly among our target demographic of young adults aged
                13 to 26. Mei Cha's ability to remain agile and adapt to
                changing market trends was a key factor in its success, helping
                us expand from events to a more permanent business model.
              </p>
              <p>
                In the following year, Mei Cha evolved into the Lemon Scholars,
                a business focused on selling lemonade at large fairs with the
                goal of raising money for college. As a co-founder, I once again
                took charge of the business operations, applying my previous
                experience in entrepreneurship to ensure the Lemon Scholars
                became a hit. The combined success of Mei Cha and Lemon Scholars
                led to{" "}
                <span className="bold">over $50,000 in total revenue</span>,
                demonstrating our ability to build and scale successful
                ventures. This new venture allowed me to continue honing my
                entrepreneurial skills and provided a scalable business model
                that brought in steady revenue during peak fair seasons.
              </p>
              <p>
                Through both ventures, I gained extensive experience in
                strategic planning, marketing, financial projections, and team
                management, further enhancing my expertise in business
                development and entrepreneurship.
              </p>
            </>
          }
        />
        <div id="gallery" className="gallery-entrance">
          <text className="proj-entrance-text">
            You are now entering ( Gallery ) section{" "}
          </text>
          <text className="proj-counter"> ● 02/04</text>
        </div>
      </div>
      <div className="section-three">
        <section className="gallery">
          <div className="projects-number">02</div>
          <div className="projects-header">Gallery</div>
        </section>
        <img src={gallery1} alt="First Image" className="gallery1" />
        <img src={gallery2} alt="First Image" className="gallery1" />
        <div id="resume" className="resume-entrance">
          <text className="proj-entrance-text">
            You are now entering ( Resume ) section{" "}
          </text>
          <text className="resume-counter"> ● 03/04</text>
        </div>
      </div>
      <div className="section-four">
        <section className="resume">
          <div className="projects-number">03</div>
          <div className="projects-header">Resume</div>
        </section>
        <img src={resume} alt="Karkare_Ayush" className="resume_photo" />
        <Card />
        <div id="contact" className="contact-entrance">
        <text className="proj-entrance-text">
          You are now entering ( Contact ) section{" "}
        </text>
        <text className="resume-counter"> ● 04/04</text>
      </div>
      </div>
      <div className="section-five">
        <section className="contact">
          <div className="projects-number">04</div>
          <div className="projects-header">Contact</div>
        </section>
        <iframe
      src="https://tally.so/embed/w88kxl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      width="100%"
      height="500px"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Contact Form"
      style={{ border: "none" }}
      allow="fullscreen; encrypted-media"
    ></iframe>

    <div className="end-internet">
      You have reached the end of the internet
    </div>
      </div>
    </div>  

  );
}

export default Homepage;
