import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState(" ");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-normal sm:w-[18.7%] w-full ">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/*....... Product info....  */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3{ass}" />
            <img src={assets.star_icon} alt="" className="w-3{ass}" />
            <img src={assets.star_icon} alt="" className="w-3{ass}" />
            <img src={assets.star_icon} alt="" className="w-3{ass}" />
            <img src={assets.star_dull_icon} alt="" className="w-3{ass}" />
            <p className="pl-2">{122}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {productData.price}
            {currency}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>サイズを選択</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? "border-orange-500" : ""
                    }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            カートに入れる
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% 本物の商品。</p>
            <p>この商品は代金引換での購入が可能です。</p>
            <p>7日以内なら簡単に返品できます。</p>
          </div>
        </div>
      </div>
      {/* ...........Descrption & Review Section .................. */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">説明</b>
          <p className="border px-5 py-3 text-sm">評価 (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            FOREVER へようこそ。ここは、個性的でトレンド感あふれるストリートウェアの最先端ブランドです。
            カジュアルな定番アイテムから限定リリースまで、あなたのスタイルを際立たせるファッションをお届けします。
            街を代表するもよし、自分だけのスタイルを作るもよし。StreetHubは、あなたの動きにフィットするルックを提供します。
            カルチャーのために作られ、スタイルで動かされ、ストリートのために生まれました。
          </p>
          <p>
            FOREVER では、ファッションは単なる服ではなく、自分を表現する手段だと考えています。
            だからこそ、すべてのアイテムにおいて品質・快適さ・オリジナリティにこだわっています。
            日常使いの定番から、個性を際立たせる特別なアイテムまで、ストリートスタイルを格上げするアイテムが揃っています。
            迅速な配送、安全な決済、そしてここでしか手に入らない限定コレクション — すべてが一つの場所に。
          </p>
        </div>
      </div>
      {/* .......display related products ......... */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
