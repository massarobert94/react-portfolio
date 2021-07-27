import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "80%",
          value: "80"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "20%", value: "20" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "25%",
          value: "25"
        },
        // {
        //   id: "Python_skill",
        //   content: "Python",
        //   porcentage: "75%",
        //   value: "75"
        // },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Robert Massa and I am a full-stack Javascript developer. I have experience with SEO, content writing, and web development. I try to blend all of these skills together so that the sites I design and develop drive results and conversions. I believe that it's important to design everything with a purpose in mind so that the marketing, development, and SEO goals are all aligned."
        },
        {
          id: "second-p-about",
          content:
            "I have a formal education from the University of Massachusetts, Lowell. I received my bachelor's degree in business administration with a focus on finance. I am currently pursuing a second bachelor's degree in computer science, with a focus on web development. When I am not coding, I really enjoy staying active by running, lifting weights, playing basketball, and skiing. When I'm not being active, I love challenging myself with a coding task or reading."
        },
        {
          id: "third-p-about",
          content:
            "Something that I believe has contributed in a significant way to my character is my prior experience as a line cook. I worked in a variety of restaurant environments, from fine-dining to upscale New American cuisine. Being a line cook really taught me the importance of struggling and grinding to get where I want to be, and how satisfying the hustle can be. It also taught me to be fully accountable and take extreme responsibility of every aspect of my life. The experience also drives me to chase my goals and not relent until I get where I want to be, professionally and personally."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        {/* <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        > */}
                          {/* <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          /> */}
                        {/* </div> */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* <div className="about-me pt-4 pt-md-0"></div> */}
                        <div className="title-box-2">
                          <h5 className="title-left">Skills</h5>
                    </div>
                    </div>
                    
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
