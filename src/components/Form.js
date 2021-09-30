import React, { useState, useEffect } from "react";
import Files from "react-files";

import "../styles/Form.css";

const Form = ({ data, setData, preset, setColor }) => {
  var { name, photoUrl, location, phone, email, linkedin, github, website } =
    data.contact;
  var Involvement = data.Involvement;
  var Summary = data.Summary;
  var education = data.education;
  var experience = data.experience;
  var certifications = data.certifications;
  var projects = data.projects;
  var projects_link = data.projects_link;
  var awards = data.awards;

  // Handle photo upload
  const handlePhotoUpload = (files) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        photoUrl: URL.createObjectURL(files[files.length - 1]),
      },
    });
  };

  // skills
  const [skills, setSkills] = useState("");
  useEffect(() => {
    var temp = "";
    data.skills.map((item) => (temp = temp + item + ","));
    setSkills(temp);
  }, [data]);

  // interests
  const [interests, setInterests] = useState("");
  useEffect(() => {
    var temp = "";
    data.interests.map((item) => (temp = temp + item + ","));
    setInterests(temp);
  }, [data]);

  // Contact
  const handleContact = (e) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Skills
  const handleSkills = () => {
    var array = skills.split(",");
    setData({
      ...data,
      skills: array,
    });
  };

  // Interests
  const handleInterest = () => {
    var array = interests.split(",");
    setData({
      ...data,
      interests: array,
    });
  };

  // Add Row
  const addRow = (section, structure) => {
    var temp = section;
    temp.push(structure);
    setData({
      ...data,
      section: temp,
    });
  };

  // Remove Row
  const deleteRow = (section, index) => {
    var temp = section;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      section: temp,
    });
  };

  // Handle Change
  const handleChange = (e, index, section, type) => {
    var temp = section;
    temp[index][type] = e.target.value;

    setData({
      ...data,
      section: temp,
    });
  };

  // color change
  const changeColor = (item) => {
    setColor({
      primary: item.primary,
      background: item.background,
      skills: item.skills,
    });
  };

  return (
    <div className="form-container">
      <div className="theme">
        <p>Select theme: </p>
        <div className="color">
          {preset.map((item, key) => (
            <div
              key={key}
              className="colorType"
              onClick={() => changeColor(item)}
              style={{ backgroundColor: `${item.primary}` }}
            ></div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <Files
            className="file-btn"
            onChange={(files) => handlePhotoUpload(files)}
            onError={(err) => console.log(err)}
            accepts={["image/jpeg", "image/jpg", "image/png", "image/svg"]}
            multiple
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            Upload Photo
          </Files>
        </div>
      </div>

      <div className="form">
        <div className="contact">
          <hr />
          <h3 className="heading">Contact</h3>
          <p className="label">Photo URL</p>
          <input
            type="text"
            name="photoUrl"
            value={photoUrl}
            onChange={handleContact}
          />
          <p className="label">Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleContact}
          />
          
          <p className="label">Address</p>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleContact}
          />
          <p className="label">Phone</p>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleContact}
          />
          <p className="label">Email</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleContact}
          />
          <p className="label">LinkedIn</p>
          <input
            type="text"
            name="linkedin"
            value={linkedin}
            onChange={handleContact}
          />
          <p className="label">Github</p>
          <input
            type="text"
            name="github"
            value={github}
            onChange={handleContact}
          />
          <p className="label">Website</p>
          <input
            type="text"
            name="website"
            value={website}
            onChange={handleContact}
          />
        </div>

        <div className="section Summary">
          <hr />
          <h3 className="heading">Summary</h3>
          <textarea
            name="Summary"
            cols="50"
            rows="5"
            value={Summary}
            onChange={(e) => setData({ ...data, Summary: e.target.value })}
          ></textarea>
        </div>

        <div className="section skills">
          <hr />
          <div style={{ display: "flex" }}>
            <h3 className="heading">Skills</h3>
            <button className="btn btn-sm btn-primary" onClick={handleSkills}>
              Done
            </button>
          </div>
          <textarea
            name="skills"
            cols="50"
            rows="5"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          ></textarea>
        </div>

        <div className="section skills">
          <hr />
          <div style={{ display: "flex" }}>
            <h3 className="heading">Interests</h3>
            <button className="btn btn-sm btn-primary" onClick={handleInterest}>
              Done
            </button>
          </div>
          <textarea
            name="skills"
            cols="50"
            rows="5"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          ></textarea>
        </div>

        <div className="section Involvement">
          <hr />
          <h3 className="heading">Involvement</h3>
          {Involvement.map((item, index) => {
            return (
              <div className="row container-fluid" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={item.name}
                    onChange={(e) =>
                      handleChange(e, index, Involvement, "name")
                    }
                  />
                  <textarea
                    name="position"
                    cols="30"
                    rows="3"
                    placeholder="Position"
                    value={item.position}
                    onChange={(e) =>
                      handleChange(e, index, Involvement, "position")
                    }
                  />
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteRow(Involvement, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            onClick={() => addRow(Involvement, { name: "", position: "" })}
          >
            Add
          </button>
        </div>

        <div className="section education">
          <hr />
          <h3 className="heading">Education</h3>
          {education.map((item, index) => {
            return (
              <div className="row container-fluid" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) => handleChange(e, index, education, "year")}
                  />
                  <input
                    type="text"
                    name="course"
                    placeholder="Course/Degree"
                    value={item.course}
                    onChange={(e) =>
                      handleChange(e, index, education, "course")
                    }
                  />
                  <input
                    type="text"
                    name="institution"
                    placeholder="School/College"
                    value={item.institution}
                    onChange={(e) =>
                      handleChange(e, index, education, "institution")
                    }
                  />

                  <input
                    type="number"
                    name="percentage"
                    placeholder="Percentage/GPA"
                    value={item.percentage}
                    onChange={(e) =>
                      handleChange(e, index, education, "percentage")
                    }
                  />
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteRow(education, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            onClick={() =>
              addRow(education, {
                year: "",
                course: "",
                institution: "",
                university: "",
                percentage: "",
              })
            }
          >
            Add
          </button>
        </div>

        <div className="section experience">
          <hr />
          <h3 className="heading">Experience</h3>
          {experience.map((item, index) => {
            return (
              <div className="row container-fluid" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) => handleChange(e, index, experience, "year")}
                  />
                  <input
                    type="text"
                    name="position"
                    placeholder="Role/Position"
                    value={item.position}
                    onChange={(e) =>
                      handleChange(e, index, experience, "position")
                    }
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={item.company}
                    onChange={(e) =>
                      handleChange(e, index, experience, "company")
                    }
                  />
                  <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) =>
                      handleChange(e, index, experience, "description")
                    }
                  />
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteRow(experience, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            onClick={() =>
              addRow(experience, {
                year: "",
                company: "",
                position: "",
                description: "",
              })
            }
          >
            Add
          </button>
        </div>

        <div className="section certifications">
          <hr />
          <h3 className="heading">Certifications</h3>
          {certifications.map((item, index) => {
            return (
              <div className="row container-fluid" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={item.year}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "year")
                    }
                  />
                  <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={item.course}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "course")
                    }
                  />
                  <input
                    type="text"
                    name="institution"
                    placeholder="Institution"
                    value={item.institution}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "institution")
                    }
                  />
                  <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) =>
                      handleChange(e, index, certifications, "description")
                    }
                  />
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={(e) => deleteRow(certifications, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            onClick={() =>
              addRow(certifications, {
                year: "",
                institution: "",
                course: "",
                description: "",
              })
            }
          >
            Add
          </button>
        </div>

        <div className="section projects">
          <hr />
          <h3 className="heading">Projects</h3>
          {projects.map((item, index) => {
            return (
              <div className="row container-fluid" key={index}>
                <div className="item">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={item.title}
                    onChange={(e) => handleChange(e, index, projects, "title")}
                  />
                  <input
                    type="text"
                    name="link"
                    placeholder="Project URL"
                    value={item.link}
                    onChange={(e) => handleChange(e, index, projects, "link")}
                  />
                  <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) =>
                      handleChange(e, index, projects, "description")
                    }
                  />
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteRow(projects, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            onClick={() =>
              addRow(projects, { title: "", link: "", description: "" })
            }
          >
            Add
          </button>
          <input
            type="text"
            name="projects_link"
            placeholder="URL of More Projects"
            value={projects_link}
            onChange={(e) =>
              setData({ ...data, projects_link: e.target.value })
            }
          />
        </div>

        <div className="section projects">
          <hr />
          <h3 className="heading">Achievements</h3>
          {awards.map((item, index) => {
            return (
              <div className="container-fluid" key={index}>
                <div className="row item">
                  <input
                    type="text"
                    name="title"
                    placeholder="awards"
                    value={item.title}
                    onChange={(e) => handleChange(e, index, awards, "title")}
                  />
                </div>
                <div className="row">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteRow(awards, index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <button
            className="btn btn-sm btn-dark"
            onClick={() => addRow(awards, { title: "" })}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
