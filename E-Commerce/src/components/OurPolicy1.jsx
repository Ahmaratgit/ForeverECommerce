import React from "react";
import { assets } from "../assets/assets";

const OurPolicy1 = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">かんたん交換</p>
        <p className="text-gray-400">面倒な手続きなしで、簡単に交換できます。</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">7日以内返品OK</p>
        <p className="text-gray-400">7日間の無料返品に対応しています。</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">安心のカスタマーサポート</p>
        <p className="text-gray-400">24時間いつでもサポート対応</p>
      </div>
    </div>
  );
};

export default OurPolicy1;
