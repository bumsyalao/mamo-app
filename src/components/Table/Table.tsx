import React from 'react';
import { tableHeaders, Invoices } from '../../util/mock-data'
import { Badges } from '../Badges';

export const Table = ({ tableData }: { tableData: Invoices[] }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    {tableHeaders.map((header, i) => {
                        return <th key={header + i}>{header}</th>
                    })}
                </tr>
            </thead>
            <tbody>

                {tableData.map(({ id, customer, amount, status, created }, i) => {
                    return (
                        <tr key={id + i}>
                            <td>{id}</td>
                            <td>{customer}</td>
                            <td>{`AED ${amount}`}</td>
                            <td><Badges status={status} /></td>
                            <td>{created}</td>
                            <td>...</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}