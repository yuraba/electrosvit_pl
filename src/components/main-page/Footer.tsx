import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer text-center">
            <Image
                className="m-auto"
                src="/footer-logo.svg"
                alt="Electrosvit logo"
                width={375}
                height={250}
            />
        </footer>
    );
};

export default Footer;
