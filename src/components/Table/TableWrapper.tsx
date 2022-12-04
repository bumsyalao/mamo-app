import React from 'react';
import { Tabs } from '../Tabs';
import { Table } from './Table';
import invoices from '../../util/mock-data';
import { groupBy } from 'lodash';

let invoicesMap = groupBy(invoices, invoice => invoice.status);
invoicesMap = { ['All invoices']: invoices, ...invoicesMap };


const getTableData = (tab: string) => {
    return invoicesMap[tab];

}

export const TableWrapper = () => {

    return (
        <section className="table-wrapper">
            <div className="table-container">
                <Tabs>
                    {Object.keys(invoicesMap).map((tab, i) => {
                        let tableData = getTableData(tab);

                        return (
                            <div label={`${tab} (${tableData.length})`} key={tab + i} tableData={tableData} >
                                <Table tableData={tableData} />
                            </div>
                        )

                    })}
                </Tabs>
            </div>
        </section>
    );
};