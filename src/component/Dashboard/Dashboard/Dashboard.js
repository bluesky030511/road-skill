import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import LessonByDate from '../LessonByDate/LessonByDate';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [lesson, setLesson] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);

    }
    useEffect(() => {
        fetch("https://cryptic-lake-39562.herokuapp.com/lessonByDate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(lesson => setLesson(lesson))
    }, [selectedDate])
    return (
        <div>
            <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    <LessonByDate lesson={lesson}></LessonByDate>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Dashboard;