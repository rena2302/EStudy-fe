import "../courseLearn/courseLearn.css"
 export default function vocabularyFlashCard(){
    return(
        <div className="content__container">
        <input type="checkbox" id="content__checkbox" className="content__input" />
        <div className="content-left hide-on-mobile hide-on-tablet">
          <div className="flex__container header__container">
            <a href="courseLearn.html" className="content-left__header">List 1</a>
            <a href="" className="content-left__dropleft">
              <label htmlFor="content__checkbox"
                ><i className="content-left__icon fa-solid fa-angle-left"></i
              ></label>
            </a>
          </div>
          <div className="course-learn__container">
            <ul className="course-learn__list">
              <li className="course-learn__item">
                <a
                  href="vocabularyFlashCard.html"
                  className="content__box-course content__box-course--done content__box-course--chosen content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Từ vựng:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    FlashCard</span
                  >
                </a>
              </li>
              <li className="course-learn__item">
                <a
                  href="multichoiceLearn.html"
                  className="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    Trắc nghiệm từ vựng</span
                  >
                </a>
              </li>
              <li className="course-learn__item">
                <a
                  href="findPairLearn.html"
                  className="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    Tìm cặp</span
                  >
                </a>
              </li>
              <li className="course-learn__item">
                <a
                  href="listenLearn.html"
                  className="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    Nghe từ vựng</span
                  >
                </a>
              </li>
              <li className="course-learn__item">
                <a
                  href="translateLearn.html"
                  className="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    Dịch nghĩa / Điền từ</span
                  >
                </a>
              </li>
              <li className="course-learn__item">
                <a
                  href="listenSpell.html"
                  className="content__box-course content__box-course--done content__box-course-in-list"
                >
                  <i
                    className="fa-solid fa-circle-check content__box-course__icon-done"
                  ></i>
                  <h3 className="content__box-course-category">Luyện tập:</h3>
                  <span
                    className="content__box-description content__box-description-in-list"
                  >
                    Nghe chính tả</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-right">
          <nav className="nav__content-right">
            <div
              className="nav__content-header-right hide-on-mobile hide-on-tablet"
            >
              <a href="" className="nav__content-link-right"
                >IELTS General Reading
              </a>
              <i className="nav__content-right__icon fa-solid fa-chevron-right"></i>
              <span className="nav__content-transition-right">Từ vựng TOEIC</span>
            </div>
            <label className="hide" htmlFor="nav-mobile-course-checkbox"
              ><i className="fa-solid fa-bars nav__icon"></i
            ></label>
          </nav>
          <input
            type="checkbox"
            id="nav-mobile-course-checkbox"
            className="nav-mobile-course__input"
          />
          <div className="nav__mobile-course hide">
            <div className="flex__container header__container">
              <a href="" className="content-left__header">IELTS General Reading</a>
              <a href="" className="content-left__dropleft">
                <label htmlFor="nav-mobile-course-checkbox"
                  ><i className="content-left__icon fa-solid fa-angle-left"></i
                ></label>
              </a>
            </div>
            <div className="course-learn__container">
              <ul className="course-learn__list">
                <li className="course-learn__item">
                  <a
                    href=""
                    className="course-learn__link course-learn__link--chosen"
                    >Từ vựng TOEIC</a
                  >
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link">
                    Phương pháp làm các dạng câu hỏi trong IELTS General Reading
                  </a>
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link">
                    Video chữa đề chi tiết
                  </a>
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link"> PRACTICE ZONE </a>
                </li>
                <li className="course-learn__item">
                  <a href="" className="course-learn__link">
                    GT Practice Set 7 Test 1: Luyện tập từ vựng
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-right__container">
            <div className="grid wide grid-wide-course-learn">
              <a href="" className="flashcard__train">Luyện tập flashcards</a>
              <div className="train__flex-container">
                <a
                  href=""
                  className="flashcard__train-link flashcard__train-link--random"
                >
                  <i className="fa-solid fa-shuffle flashcard__train-icon"></i> Xem
                  ngẫu nhiên</a
                >
                <a
                  href=""
                  className="flashcard__train-link flashcard__train-link--stop"
                >
                  <i className="fa-solid fa-ban flashcard__train-icon"></i> Dừng học
                  list từ này</a
                >
              </div>
              <div className="content__box">
                <div className="vocabulary__total-container">
                  <div className="vocabulary__total-box">
                    <p className="vocabulary__total-text">55</p>
                    <p className="vocabulary__total-description">Tổng số từ</p>
                  </div>
                  <div className="vocabulary__total-box">
                    <p className="vocabulary__total-text">55</p>
                    <p className="vocabulary__total-description">Đã học</p>
                  </div>
                  <div className="vocabulary__total-box">
                    <p className="vocabulary__total-text">55</p>
                    <p className="vocabulary__total-description">Đã nhớ</p>
                  </div>
                  <div className="vocabulary__total-box">
                    <p
                      className="vocabulary__total-text vocabulary__total-text-red"
                    >
                      0
                    </p>
                    <p className="vocabulary__total-description">Cần ôn tập</p>
                  </div>
                </div>
              </div>
              <p className="vocabulary__description">List có 55 từ</p>
              <div className="content__box">
                <div className="vocabulary__container row">
                  <div className="col l-8">
                    <div className="vocabulary__flex-header">
                      <h2 className="vocabulary__content-header">
                        accountant (n) /ə'kaʊntənt/
                      </h2>
                      <a href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </a>
                      <span className="vocabulary__national">UK</span>
                      <a href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </a>
                      <span className="vocabulary__national">US</span>
                    </div>
                    <div className="vocabulary__study">
                      <h4 className="vocabulary__study-header">Định nghĩa:</h4>
                      <p className="vocabulary__study-content">
                        một người chịu trách nhiệm về tiền trong một doanh
                        nghiệp, kế toán = a person responsible htmlFor the money in
                        a business
                      </p>
                      <br />
                      <h4 className="vocabulary__study-header">Ví dụ:</h4>
                      <ul className="vocabulary__study-list">
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes (=Dịch: Kế toán
                          viên của tôi lo việc đóng thuế cho tôi)
                        </li>
                        <li className="vocabulary__study-item">
                          Many [accountants] made it to the board having
                          previously served as senior executives (=Dịch: Nhiều
                          kế toán viên đã lọt vào hội đồng quản trị trước đây
                          từng giữ chức vụ điều hành cấp cao)
                        </li>
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes. (=Dịch: Kế
                          toán viên của tôi lo việc đóng thuế cho tôi.)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col l-4">
                    <img
                      width="100%"
                      src="https://study4.com/media/toeic_course_vocabs/media/02_Accounting.jpg.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="content__box">
                <div className="vocabulary__container row">
                  <div className="col l-8">
                    <div className="vocabulary__flex-header">
                      <h2 className="vocabulary__content-header">
                        accountant (n) /ə'kaʊntənt/
                      </h2>
                      <a href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </a>
                      <span className="vocabulary__national">UK</span>
                      <a href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </a>
                      <span className="vocabulary__national">US</span>
                    </div>
                    <div className="vocabulary__study">
                      <h4 className="vocabulary__study-header">Định nghĩa:</h4>
                      <p className="vocabulary__study-content">
                        một người chịu trách nhiệm về tiền trong một doanh
                        nghiệp, kế toán = a person responsible htmlFor the money in
                        a business
                      </p>
                      <br />
                      <h4 className="vocabulary__study-header">Ví dụ:</h4>
                      <ul className="vocabulary__study-list">
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes (=Dịch: Kế toán
                          viên của tôi lo việc đóng thuế cho tôi)
                        </li>
                        <li className="vocabulary__study-item">
                          Many [accountants] made it to the board having
                          previously served as senior executives (=Dịch: Nhiều
                          kế toán viên đã lọt vào hội đồng quản trị trước đây
                          từng giữ chức vụ điều hành cấp cao)
                        </li>
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes. (=Dịch: Kế
                          toán viên của tôi lo việc đóng thuế cho tôi.)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col l-4">
                    <img
                      width="100%"
                      src="https://study4.com/media/toeic_course_vocabs/media/02_Accounting.jpg.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="content__box">
                <div className="vocabulary__container row">
                  <div className="col l-8">
                    <div className="vocabulary__flex-header">
                      <h2 className="vocabulary__content-header">
                        accountant (n) /ə'kaʊntənt/
                      </h2>
                      <a href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </a>
                      <span className="vocabulary__national">UK</span>
                      <a href="#" className="vocabulary__speaker">
                        <i
                          className="fa-solid fa-volume-high vocabulary__content-icon"
                        ></i>
                      </a>
                      <span className="vocabulary__national">US</span>
                    </div>
                    <div className="vocabulary__study">
                      <h4 className="vocabulary__study-header">Định nghĩa:</h4>
                      <p className="vocabulary__study-content">
                        một người chịu trách nhiệm về tiền trong một doanh
                        nghiệp, kế toán = a person responsible htmlFor the money in
                        a business
                      </p>
                      <br />
                      <h4 className="vocabulary__study-header">Ví dụ:</h4>
                      <ul className="vocabulary__study-list">
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes (=Dịch: Kế toán
                          viên của tôi lo việc đóng thuế cho tôi)
                        </li>
                        <li className="vocabulary__study-item">
                          Many [accountants] made it to the board having
                          previously served as senior executives (=Dịch: Nhiều
                          kế toán viên đã lọt vào hội đồng quản trị trước đây
                          từng giữ chức vụ điều hành cấp cao)
                        </li>
                        <li className="vocabulary__study-item">
                          My [accountant] takes care of my taxes. (=Dịch: Kế
                          toán viên của tôi lo việc đóng thuế cho tôi.)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col l-4">
                    <img
                      width="100%"
                      src="https://study4.com/media/toeic_course_vocabs/media/02_Accounting.jpg.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <a href="" className="content__transition-number">1</a>
            </div>
          </div>
        </div>
      </div>
    )
 }