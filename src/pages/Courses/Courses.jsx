import React, { useContext, useEffect, useState } from 'react'
import './courses.css'
import { Link } from "react-router-dom";
import CourseCard from '../course card/CourseCard';
import {  useCourses } from '../../context/CoursesContext';
import AddCourseModal from '../../components/AddCourseModal/AddCourseModal';
import defaultimg from '../../assets/courseDefault.jpg'

export default function Courses() {

  const {filterByCat,openAddCourseModal,setOpenAddCourseModal,admin,setCourses,enroll} = useCourses();
  
  const coursesPerCategory = JSON.parse(sessionStorage.getItem('courses')).length ?
  filterByCat(JSON.parse(sessionStorage.getItem('courses')).filter(e => e.kidsCourses == false)) :
  [];
  

  useEffect(() => {
    const courses = JSON.parse(sessionStorage.getItem('courses'));
    if(JSON.parse(localStorage.getItem('knoz-user'))) {
    const userCourses = JSON.parse(localStorage.getItem('knoz-user')).user.courses;
     userCourses.length ? courses.map(e => {
     const course = userCourses.filter(c => c == e._id)
     if(course[0] == e._id)  e.isEnrolled = true
    }) : null}
    sessionStorage.setItem('courses',JSON.stringify(courses))
    setCourses(courses)
  },[enroll])

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
        enroll={e.isEnrolled}
        key={e._id}
        videoCount={e.course_name}
        />
        )}
      </div>
      </div> 
      })}
    </div>) : <div className='noCoursesPage'>
    <h2 className='noCourses'>No courses yet</h2>
    {admin && <button className='add-course' onClick={() => setOpenAddCourseModal(true)}>add Course</button> }
    </div>
  ) : <AddCourseModal kids={false} />
}
