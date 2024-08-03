import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import "./styles.scss";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationCustom: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        const delta = 1; // Số trang hiển thị ở mỗi bên của trang hiện tại

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            pageNumbers.push(i);
        }

        if (currentPage - delta > 2) {
            pageNumbers.unshift("...");
        }
        if (currentPage + delta < totalPages - 1) {
            pageNumbers.push("...");
        }

        pageNumbers.unshift(1);
        if (totalPages !== 1) {
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <nav>
            <ul className="pagination_custom__container">
                <li
                    className={` ${
                        currentPage === 1
                            ? "pagination_custom__container__page-item__disabled"
                            : "pagination_custom__container__page-item"
                    }`}
                >
                    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <ChevronLeft />
                    </button>
                </li>
                {getPageNumbers().map((number, index) => (
                    <li
                        key={index}
                        className={` ${
                            currentPage === number
                                ? "pagination_custom__container__page-item__active"
                                : "pagination_custom__container__page-item"
                        }`}
                    >
                        <button
                            onClick={() => {
                                if (typeof number === "number") onPageChange(number);
                            }}
                            className={`${typeof number === "number" && "active:opacity-90 "}`}
                            disabled={typeof number === "string"}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li
                    className={` ${
                        currentPage === totalPages
                            ? "pagination_custom__container__page-item__disabled"
                            : "pagination_custom__container__page-item"
                    }`}
                >
                    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <ChevronRight />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default PaginationCustom;
