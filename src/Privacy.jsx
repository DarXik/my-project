import React from 'react';
import Footer from "./Footer";
import Policy from "./components/policy.jsx";

const Privacy = () => {
    return (
        <>
            <section className="welcome w-80 mx-auto mt-4 pb-4">
                <div className="mt-4">
                    <h1 className="text-3xl drop-shadow-xl text-center">Privacy policies</h1>
                </div>
                <div className="mt-6">
                    <Policy title="General"
                            text="When you visit the Site, we automatically collect certain information about your device, including information about your web browser, your IP address, time zone and some of the cookies installed on your device. In addition, when you browse the Site, we collect information about individual web pages or products you view, which web sites or search terms refer to the Site, and information about how you interact with the Site. "/>
                    <Policy title="Do not trade" text="Lorem ipsum"/>
                    <Policy title="Do not trade" text="Lorem ipsum"/>
                    <Policy title="Do not trade" text="Lorem ipsum"/>
                </div>

            </section>
            <Footer/>
        </>
    )
        ;
};

export default Privacy;
