import React from 'react';

export const Table = ({ tableData }: any) => {

    console.log(tableData, '=====');
    return (
        <table className="table">
            <thead>
                <tr>
                    { }
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>25</td>
                    <td>London</td>
                    <td>123456789</td>
                    <td>

                    </td>
                </tr>

            </tbody>
        </table>
    );
}