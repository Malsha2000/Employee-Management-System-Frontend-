import React, { useState } from "react";
import EmployeeTable from "../../../Components/EmployeeTable";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";

const EmployeeList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>          
            <Header toggle={toggle} />
            <div>
                <h1 className="text-black font-bold px-10 pt-5 mt-4 mb-6 text-5xl">
                    All Employees
                </h1>
                <EmployeeTable />
            </div>
            <Footer />
        </>
    );
};

export default EmployeeList;
