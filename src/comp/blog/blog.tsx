"use client";

import { useTranslation } from "react-i18next";
import { FadeUp } from "../../helpers/fade/FadeUp";
import Header from "../header/header";
import blogData from "./blog_data";
import './blog_translate'
import "./blog.css";

export default function Blog() {
  const { t } = useTranslation();
  return (
    <div className="blog-page">
      <Header name={t("blog_title")} />
      {/* Blog Posts */}
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="container">
          {blogData.map((blog) => (
            <FadeUp key={blog.id} delay={0.3} duration={0.8}>
              <div className="bg-container bg-gray-800 w-full lg:p-0 rounded-lg shadow-xl mt-10">
                <div className="text-left text-white font-bold text-2xl mx-auto mt-9 p-4">
                  {t(`${blog.title}`)}
                </div>
                <p className="font-s text-white p-3 ml-2">
                  {t(`${blog.text}`)}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
