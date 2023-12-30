import React, { useContext, useEffect } from 'react';
import ReactPaginate from "react-paginate";
import { Context } from "./ulits/AppContext";
function PaginateComponent({ itemsPerPage, data }) {
    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    // console.log(data);

    // We start with an empty list of items.
    const {setCurrentItems,  pageCount, setPageCount, itemOffset, setItemOffset} = useContext(Context);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage , data]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        window.scrollTo(0,520);
        const newOffset = (event.selected * itemsPerPage) % data.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    );
}

export default PaginateComponent;