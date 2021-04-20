import React from 'react';

const LessonList = ({lesson}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  lesson.map((lesson, index) => 
                        
                    <tr>
                        <td>{index +1}</td>
                        <td>{lesson.name}</td>
                        <td>{lesson.phone}</td>
                        <td>{lesson.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default LessonList;