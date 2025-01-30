import React, { useEffect } from 'react'
import Cards from './Cards/Cards'
import OnlineCourses from './online-courses/OnlineCourses';
import StudentOpinionsSec from './students opinios/StudentOpiniosSec';
import Footer from './Footer/Footer'
import Intron from './Intro/Intorn'
import { useCourses } from '../context/CoursesContext';

export default function HomePage() {

  // const {setCourses,enroll} = useCourses()
  // useEffect(() => {
  //   const courses = JSON.parse(sessionStorage.getItem('courses'));
  //   const userCourses = JSON.parse(localStorage.getItem('knoz-user')).user.courses;
  //    userCourses.length ? courses.map(e => {
  //    const course = userCourses.filter(c => c == e._id)
  //    if(course[0] == e._id)  e.isEnrolled = true
  //   }) : null
  //   sessionStorage.setItem('courses',JSON.stringify(courses))
  //   setCourses(courses)
  // },[enroll])

  return (
    <>
       <Intron />
        <Cards />
        <OnlineCourses />
        {/* <StudentOpinionsSec /> */}
        <Footer />
    </>
  )
}
