import React, { useState } from 'react';
import paginate from '../util/paginate';
import { Invoices } from '../util/mock-data'


export const Paginate = ({ tableData }: { tableData: Invoices[] }) => {

    const [page, setPage] = useState(1);
    const count = 10;
    const {
        data: paginatedData,
        currentPage,
        totalPages,
    } = paginate(tableData, count, page);
    const handleNext = () => {
        if (page < totalPages) {
            setPage((val) => val + 1);
        } else {
            setPage(totalPages);
        }
    };
    const handlePrev = () => {
        if (page > 1) {
            setPage((val) => val - 1);
        } else {
            setPage(1);
        }
    };

    return (
        <div className='table-footer-items'>
            <div className='hideOnMobile'>
                1 - {count} of {paginatedData.length} invoices
            </div>
            <div className='table-footer-paginate'>
                <div>Page {page} of {totalPages} </div>
                <div>
                    <button disabled={page === 1} onClick={handlePrev}>{"<"}</button>
                    <button disabled={page === totalPages} onClick={handleNext}>{">"}</button>
                </div>
            </div>
        </div>
    );
}