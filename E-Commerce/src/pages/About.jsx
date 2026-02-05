import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Foreverは、年齢や性別を問わず楽しめるクロージングブランド。
            ラフに着ても、主張しても。ストリートウェアで、自分らしさを表現しよう。
            快適さと都会的なデザインを組み合わせ、毎日着たくなるスタイルを提案します。
          </p>
          <p>
            私たちは品質に真剣に向き合っています。
            すべてのアイテムは、耐久性のある素材を使用し、細部まで丁寧に仕上げています。
            優れたスタイルは、長く愛されるべきもの。縫製から仕上げまで品質にこだわり、お客様の満足を大切にしています。
          </p>
          <b className="text-gray-800">私たちの使命</b>
          <p>
            私たちのミッションはシンプルです。ファッションを、もっと身近で、もっと自由なものにすること。
            年齢や体型、バックグラウンドに関係なく、スタイルを通して一人ひとりが自分らしく輝けるようサポートします。
            Streetwearでは、すべての人が「かっこよく、そして自信を持てる」存在であると信じています。
          </p>
        </div>
      </div>
      <div className="mt-35">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;
