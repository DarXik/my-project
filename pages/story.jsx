import React from "react";
import Footer from "../components/Footer";
import {CardProductBig} from "../components/Card";

export default function Story() {
    return (
        <>
            <section className="flex flex-col align-items-center mx-auto lg:visible">
                <div
                    className="border-2 border-white rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80 lg:w-[40rem] mx-auto mt-12 p-3 px-4">
                    <h1 className="text-3xl  pb-4">This is we</h1>
                    <p>
                        <span className="text-[#78aeff] text-xl ">L</span>orem, ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatem
                        sint dolor reprehenderit neque, quaerat ea in laborum assumenda aut,
                        quas cum et inventore. Velit similique soluta delectus fuga
                        molestiae fugiat?
                    </p>
                </div>
                <div
                    className="border-2 border-white rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80 lg:w-[40rem] mx-auto mt-12 p-3 px-4">
                    <h2 className="text-center text-xl pb-2 ">Me</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                        sint dolor reprehenderit neque, quaerat ea in laborum assumenda aut,
                        quas cum et inventore. Velit similique soluta delectus fuga
                        molestiae fugiat?
                    </p>
                </div>

                <div
                    className="border-2 border-white rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-80 lg:w-[40rem] mx-auto mt-12 p-3 px-4">
                    <h2 className="text-xl pb-3">And Him</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                        sint dolor reprehenderit neque, quaerat ea in laborum assumenda aut,
                        quas cum et inventore. Velit similique soluta delectus fuga
                        molestiae fugiat?
                    </p>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}
