import React from 'react';
import { Tabs } from '../Tabs';
import { Button } from '../Button';
import { Table } from './Table';
import invoices from '../../util/mock-data';
import { groupBy } from 'lodash';

const invoicesMap = groupBy(invoices, invoice => invoice.status);
const tableTabs = [`All invoices (${invoices.length})`, ...Object.keys(invoicesMap).map((key) => `${key} (${invoicesMap[key].length})`)];

const getTableData = (label: string) => {
    // console.log(label, '======label:');

    return invoicesMap[label[0].toUpperCase() + label.slice(1)];
}

export const TableWrapper = () => {
    return (
        <section className="table-wrapper">
            <div className="table-container">
                <Tabs>
                    {tableTabs.map((tab, i) => {
                        return (
                            <div label={tab} key={tab + i}>
                                {/* <Table invoices={invoicesMap[tab.split(' ')[0]] || invoices} /> */}
                                <Table tableData={getTableData(tab)} />
                            </div>
                        )

                    })}
                </Tabs>
            </div>
        </section>
    );
};