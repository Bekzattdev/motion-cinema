import React from "react";
import scss from "./Footer.module.scss";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbTransferVertical } from "react-icons/tb";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={scss.footer}>
      <div className={scss.footerBg}>
        <div className="container">
          <div className={scss.footerText}>
            <div className={scss.footerLogo}>
              <h1>
                Mtion Cinema
                <span>
                  <BiSolidCameraMovie />
                </span>
              </h1>
              {/* <a className="">
                <TbTransferVertical />
              </a> */}
              <h2>
                IT Club
                <span>
                  <HiMiniAcademicCap />
                </span>
              </h2>
            </div>
            <div className={scss.footerAbout}>
              <h1>О нас</h1>
              <a className="">Наш Профиль</a>
              <a className="">Местоположение</a>
              <a className="">Отзывы</a>
              <a className="">Хранилище</a>
            </div>
            <div className={scss.footerInfo}>
              <h1>Контакты</h1>
              <a className="">0995255592</a>
              <a className="">@MotionWeb</a>
              <a className="">@ItCLub</a>
              <a className="">Улица Куренке...</a>
            </div>
            <div className={scss.footerShare}>
              <h1>Поделится:</h1>
              <a className="">@MotionWe.me</a>
              <div className={scss.footerIcon}>
                <a className="">
                  <FaFacebook
                    style={{
                      color: "blue",
                    }}
                  />
                </a>
                <a className="">
                  <FaTwitter
                    style={{
                      color: " rgb(70, 152, 245)",
                    }}
                  />
                </a>
                <a className="">
                  <FaInstagram
                    style={{
                      color: "red",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
