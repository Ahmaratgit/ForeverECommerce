import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justidy-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600"> 店舗</p>
          <p className="text-gray-500">
            {" "}
            東京 <br /> インド
          </p>
          <p className="text-gray-500">
            Tel:(090) 2915-1606 <br /> Email:admin@forever.com{" "}
          </p>
          <p className="font-semibold text-xl text-gray-600">
            フォーエバーでのキャリア
{" "}
          </p>
          <p className="text-gray-500">
            {" "}
            私たちのチームと求人情報についてもっと知る
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transiition -all duration-500">
            採用情報
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
