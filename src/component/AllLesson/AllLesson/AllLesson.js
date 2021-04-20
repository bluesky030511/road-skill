import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import LessonDataTable from '../LessonDataTable/LessonDataTable';

const AllLesson = () => {
    const [lesson, setLesson] = useState([])

    useEffect(() => {
        fetch("https://cryptic-lake-39562.herokuapp.com/lesson")
            .then(res => res.json())
            .then(data => setLesson(data))
    }, [])
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: -12, backgroundColor: "#F4FDFB" }}>
                <h5 className="brand-color">All Lesson</h5>
                <LessonDataTable lesson={lesson}></LessonDataTable>
            </div>

        </div>
    );
};

export default AllLesson;