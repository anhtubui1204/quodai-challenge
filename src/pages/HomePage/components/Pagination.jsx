import React from "react";

const Pagination = ({ page, setPage }) => {
    const onHandleClickPrev = () => {
        if(page === 1) return;
        else setPage(page-1)
    };

    const onHandleClickNext = () => {
        setPage(page+1)
    };

    return (
        <div id="pagination" className="btn-group mt-3" role="group">
            <button type="button" className="btn btn-outline-secondary" onClick={onHandleClickPrev}>
                Previous
            </button>
            <button type="button" className="btn btn-warning" onClick={onHandleClickNext}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
