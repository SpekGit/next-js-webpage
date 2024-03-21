import React from 'react';
import Footer from "@/components/footer";
import Header from "@/components/header";

type LayoutProps = {
    children: React.ReactNode;
};

const Wrapper: React.FC<LayoutProps>= ({children}) => {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    );
};

export default Wrapper;