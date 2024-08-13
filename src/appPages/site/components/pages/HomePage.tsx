"use client";
import HomeSection from "./homeSection/HomeSection";
import scss from "./HomePage.module.scss";
import { FiSearch } from "react-icons/fi";

const HomePage = () => {
  return (
    <>
      <div className={scss.homeBgImg}>
        <div className={scss.homeBg}>
          <div className="container">
            <div className={scss.homeAbout}>
              <div className={scss.homeInfo}>
                <h2>Добро пожаловать.</h2>
                <h5>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h5>
              </div>
              <div className={scss.homeInput}>
                <input
                  type="text"
                  placeholder="Найти фильм,сериал,персону..."
                />
                <button>
                  Найти
                  <FiSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeSection />
    </>
  );
};

export default HomePage;
