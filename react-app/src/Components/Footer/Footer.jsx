import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-primary d-flex justify-content-between fw-bold text-white p-3 mt-5" >
                <div>
                    &copy;
                    <span> {new Date().getFullYear()}</span>
                    <span> MyMart</span>
                </div>
            </div>

        </>
    )
}

export default Footer;