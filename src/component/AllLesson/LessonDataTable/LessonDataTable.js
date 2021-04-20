import React from 'react';

const LessonDataTable = ({ lesson }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Gendar</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  lesson.map((l, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{l.name}</td>
                        <td>{l.gender}</td>
                        <td>{l.phone}</td>
                        <td>{l.email}</td>
                    </tr>
                    )
                }
            </tbody>

        </table>
    );
};

export default LessonDataTable;