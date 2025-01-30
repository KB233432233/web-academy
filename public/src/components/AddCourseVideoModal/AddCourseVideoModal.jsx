import { useCourses } from '../../context/CoursesContext';
import './AddCourseVideoModal.css'
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import axios from 'axios';



function AddCourseVideoModal({id}) {

const {setOpenAddVideoModal} = useCourses()

const [validation,setValidation] = useState({
  name: false,
  video: false,
})

  const [data,setData] = useState({
    video_name: '',
    video_description: '',
    video: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('knoz-user')).token
    if(!data.video_name) {
      setValidation({...validation,name: true})
      return
    }
    if(!data.video) {
      setValidation({...validation,video:true})
      return
    }

    const formdata = new FormData();
    formdata.append('video_title',data.video_name);
    formdata.append("description", data.video_description);
    formdata.append('course_id', id);
    formdata.append('video_uri',data.video)
    try {
       await axios.post('/courses/create-course/add-videos',formdata,{headers: {
        Authorization: token
      }})
      location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  const handleCloseModal = () => {
    setOpenAddVideoModal(false)
  } 

  return (
    <div className="add-course-video-modal">
      <div className="add-course-video-container">
        <form onSubmit={handleSubmit}>
          {validation.name && (
            <span className="validation-vid">Please fill out this field</span>
          )}
          <input
            type="text"
            placeholder="video name"
            onChange={(e) => {
              setData({ ...data, video_name: e.target.value });
              setValidation({ ...validation, name: false });
            }}
          />
          <input
            type="text"
            placeholder="video description"
            onChange={(e) =>
              setData({ ...data, video_description: e.target.value })
            }
          />
          {validation.video && (
            <span className="validation-vid">Please select a video file</span>
          )}
          <label htmlFor="videos">Select video</label>
          <input
            type="file"
            id="videos"
            onChange={(e) => {
              setData({ ...data, video: e.target.files[0] });
              setValidation({ ...validation, video: false });
            }}
          />
          <button type="submit">Add video</button>
          <button onClick={handleCloseModal}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default AddCourseVideoModal