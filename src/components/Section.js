import React from 'react'
import {Link} from "react-router-dom"

const Section = () => {
    const courses = [
        {
            id: 1,
            course : "GNS 201",
            link : "/question/GNS201"
        },
        {
            id: 2,
            course : "CSC207",
            link : "/question/CSC207"
        },
        {
            id: 3,
            course : "CSC205",
            link : "/question/CSC205"
        }
    ]

    return (
        <section className="courses">
            <h2 className="courses--header">Courses Available</h2>
            <div className="course">
            {
                courses.map(course => (
                    <div className="course--list" key={course.id}>
                    <h3>{course.course}</h3>
                    <Link className="section--btn" to={course.link}>TAKE TEST</Link>
                </div>
                ))
            }
                
            </div>
        </section>
    )
}

export default Section
