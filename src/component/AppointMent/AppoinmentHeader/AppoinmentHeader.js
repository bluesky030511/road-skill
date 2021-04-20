import React from 'react';
import driving from '../../../images/driving.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointMent.css';
const AppoinmentHeader = ({ handleDateChange }) => {
    return (
        <main style={{ height: '700px' }} className="row d-flex align-items-center">
                <h2 className="brand-color ChoseLesson">Choose Your Lesson Shedule </h2>
            <div className="col-md-4 col-sm-12 offset-md-1 text-center my-auto">
                <div className="text-center calendarDiv">
                    <Calendar className="cal"
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
                <img src={driving} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppoinmentHeader;
