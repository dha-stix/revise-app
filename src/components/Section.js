import React from 'react'
import {Link} from "react-router-dom"

const Section = () => {
    const courses = [
        {
            id: 1,
            course : "GNS 201",
            link : "/question/GNS201",
            action: "TAKE TEST"
        },
        {
            id: 2,
            course : "CSC207",
            link : "/question/CSC207",
            action: "TAKE TEST"
        },
        {
            id: 3,
            course : "CSC205",
            link : "/question/CSC205",
            action: "TAKE TEST"
        },
        {
            id: 4,
            course : "CSC203",
            link : "/question/CSC203",
            action: "VIEW KEYPOINTS"
        }
    ]

    return (
        <section className="courses">
            <h2 className="courses--header">Courses Available</h2>
            <div className="course " data-aos="fade-up" data-aos-offset="50"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            {
                courses.map(course => (
                    <div className="course--list" key={course.id}>
                    <h3>{course.course}</h3>
                    <Link className="section--btn" to={course.link}>{course.action}</Link>
                </div>
                ))
            }
                
            </div>
        </section>
    )
}

export default Section
