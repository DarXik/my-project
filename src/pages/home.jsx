import React from "react";
import Carousel from "../components/carousel";

function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Navbar></Navbar>
      <section>
        <div className="welcome text-center w-80 mx-auto mt-4">
          <div className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img src="../src/assets/imgs/title-image.jpeg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h1 className="card-title">Welcome to our site!</h1>
              <p>We are simple brand with even simplier products</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Latest drops</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 mx-auto mt-10 card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="../src/assets/imgs/hmgoepprod.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Basic black</h2>
            <p>Buy simply, not expensive.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="carousel flex flex-col justify-center mt-10">
          <Carousel image="../src/assets/imgshmgoepprod.jpg"></Carousel>
          <button className="btn btn-primary w-32 mx-auto mt-5" role="button">
            Explore
          </button>
        </div>
        <div className="border-2 border-white rounded-2xl shadow-xl w-80 mx-auto mt-10 p-3 px-4">
          <h3 className="pb-1.5 text-3xl">About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab
            quis neque nihil pariatur porro libero obcaecati fugiat architecto
            maiores. Nesciunt nihil exercitationem voluptas ab dolor! Cum
            laborum excepturi voluptatem?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab
            quis neque nihil pariatur porro libero obcaecati fugiat architecto
            maiores. Nesciunt nihil exercitat
          </p>
        </div>
      </section>
      <footer className="mt-14 my-4 p-3 border-2 border-white rounded-2xl w-80 mx-auto">
        <div className="flex flex-row  gap-x-14 gap-y-3.5 mb-4">
          <div className="pb-2 ">
            {/*border-dotted  border-black border-t-2 border-t-2*/}
            <h6 className="font-bold text-lg">Contact Us</h6>
            <p>testingmail@mail.xyz</p>
            <p>+420700700700</p>
            <p>Na pamlsku 12, Praha 1</p>
          </div>
          <div className=" pb-2 ">
            {/*border-dotted  border-black border-t-2 border-t-2*/}
            <h6 className="font-bold text-lg">Follow Us</h6>
            <p>Instagram</p>
            <p>TikTok</p>
            <p>Facebook</p>
          </div>
        </div>
        <div className="">
          {/*<img className="w-32" src="../src/assets/imgsbig-logo.png" alt=""/>*/}
          <p className="opacity-60">Copyright © 2022 Blendade</p>
        </div>
        <div className="flex flex-row gap-x-1 flex-wrap opacity-75">
          <p className=" border-r border-gray-300 pr-2 mr-2">Privacy Policy</p>
          <p className=" border-r border-gray-300 pr-2 mr-2">Terms of Use</p>
          <p className=" border-r border-gray-300 pr-2 mr-2">Refunds</p>
          <p className=" border-r border-gray-300 pr-2 mr-2">Credits</p>
          <p className="">Legal</p>
        </div>
      </footer>
    </main>
  );
}

export default Home;