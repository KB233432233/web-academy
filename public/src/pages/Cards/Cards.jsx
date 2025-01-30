import "./Cards.css";
import { Link } from "react-router-dom";
import landing from '../../assets/360_F_306636176_KQbxttYdxWHsH3S6bYCD47NvVGdTL2xV.jpg'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import CourseCard from "../course card/CourseCard";
import { useCourses } from "../../context/CoursesContext";
import { useEffect } from "react";

function Cards() {

  const {filterByCat} = useCourses()
  // const coursesPerCategory = filterByCat(JSON.parse(sessionStorage.getItem('courses')))


  return (
    <div className="courses-section">
      <div className="features">
        <div className="left-side">
          <h1 className="features-title">
            Intererective teaching <br />
            our online platforms{" "}
          </h1>
          <img src={landing} />
        </div>
        <div className="right-side">
          <div className="description">
            <IoCheckmarkDoneCircle size={30} color="#032867" />
            <div className="title">
              <h3>Everyday complete workshit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                molestias perspiciatis <br /> ab cum asperiores porro quos alias
                expedita minima dicta!
              </p>
            </div>
          </div>

          <div className="description">
            <IoCheckmarkDoneCircle size={30} color="#032867" />
            <div className="title">
              <h3>Everyday complete workshit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                molestias perspiciatis <br /> ab cum asperiores porro quos alias
                expedita minima dicta!
              </p>
            </div>
          </div>

          <div className="description">
            <IoCheckmarkDoneCircle size={30} color="#032867" />
            <div className="title">
              <h3>Everyday complete workshit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                molestias perspiciatis <br /> ab cum asperiores porro quos alias
                expedita minima dicta!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
