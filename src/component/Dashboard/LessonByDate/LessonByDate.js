import React from 'react';
import LessonList from '../LessonList/LessonList';

const LessonByDate = ({lesson}) => {
    return (
        <div>
            <h2 className="text-brand text-center">Appointments {lesson.length}</h2>
            {
                lesson.length ?
                 <LessonList lesson={lesson} ></LessonList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default LessonByDate;