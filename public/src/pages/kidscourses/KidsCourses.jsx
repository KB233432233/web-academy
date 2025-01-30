import defaultimg from '../../assets/courseDefault.jpg'
import { useCourses } from '../../context/CoursesContext';
import CourseCard from '../course card/CourseCard';
import { Link } from "react-router-dom";
import AddCourseModal from '../../components/AddCourseModal/AddCourseModal';
import './KidsCourses.css'
export default function KidsCourses() {

const {openAddCourseModal,setOpenAddCourseModal,filterByCat,admin} = useCourses();
const courses = JSON.parse(sessionStorage.getItem('courses')).filter(e => e.kidsCourses == true)
const coursesPerCategory = filterByCat(courses)

  return !openAddCourseModal ? (
        coursesPerCategory.length ? (
      <div className='courses-page'>
        {coursesPerCategory.map(ele => {
          return  <div key={Object.keys(ele).at(0)}>
          <div className="courses-titles">
            <Link className="course-btn">{Object.keys(ele).at(0)}</Link>
            {admin && <button className='add-course' onClick={() => setOpenAddCourseModal(true)}>add Course</button>}
            </div>
            <div className="courses-cards">
          {Object.values(ele).at(0).map(e => <CourseCard 
          photo={e.course_img ? e.course_img : defaultimg} 
          price={e.course_price} 
          duration={e.course_duration} 
          navigateTo={e._id} 
          key={e._id}
          videoCount={e.course_name}
          />
          )}
        </div>
        </div> 
        })}
      </div>) : <div className='noCoursesPage'>
      <h2 className='noCourses'>No kids courses yet</h2>
      {admin && <button className='add-course' onClick={() => setOpenAddCourseModal(true)}>add Course</button>}
      </div>
    ) : <AddCourseModal kids={true} />
  }

