import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../apis';
import { useParams } from 'react-router-dom';

import './bookstyle.css';
import './bookstyle.scss';
import bookview_img1 from '../../assets/images/bookview_man.svg';
import bookview_img2 from '../../assets/images/bookview_sitting.svg';
import bookview_img3 from '../../assets/images/bookview_flower_green.svg';
import bookview_img4 from '../../assets/images/bookview_flower_yellow.svg';
import bookview_img5 from '../../assets/images/bookview_star_green.svg';
import bookview_img6 from '../../assets/images/bookview_star_blue.svg';
import bookview_img7 from '../../assets/images/bookview_vector_blue.png';
import bookview_img8 from '../../assets/images/bookview_vector_green.png';

const Book = () => {
  const { id } = useParams();
  const pageArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const halfLength = Math.ceil(pageArr.length / 2);

  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/relay/book/${id}`);
        const data = response.data.submissions;
        console.log(data);
        setPageData(data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    console.log(pageData);
  }, [pageData]);

  return (
    <div className="container">
      <div className="pages">
        <img className="img1" src={bookview_img1} />
        <img className="img2" src={bookview_img2} />
        <img className="img3" src={bookview_img3} />
        <img className="img4" src={bookview_img4} />
        <img className="img5" src={bookview_img5} />
        <img className="img6" src={bookview_img6} />
        <img className="img7" src={bookview_img7} />
        <img className="img8" src={bookview_img8} />
        {pageArr.slice(0, halfLength).map((_, index) => (
          <input key={index} id={index + 1} type="radio" name="trigger" />
        ))}
        {pageArr.map((num, idx) => (
          <div className="pages_page" key={idx}>
            <div
              className={`pages_page__inner ${
                num % 2 === 0 ? 'leftline' : 'rightline'
              }`}
            >
              <div className="content">
                {Object.keys(pageData).length > 0 &&
                  (num % 2 === 0 ? (
                    <div className="content_wrapper">
                      <div className="content_text">
                        {pageData[Math.ceil(num / 2)].content}
                      </div>
                      <div className="content_username">
                        작성자 : {pageData[Math.ceil(num / 2)].username}
                      </div>
                    </div>
                  ) : (
                    <img
                      className="image_wrapper"
                      src={pageData[Math.ceil(num / 2)].sketch}
                    />
                  ))}
              </div>
              {num === 1 || num === pageArr.length ? (
                <></>
              ) : num % 2 === 0 ? (
                <div className="control next">
                  <label htmlFor={1 + Math.floor(num / 2)}></label>
                </div>
              ) : (
                <div className="control">
                  <label htmlFor={Math.floor(num / 2)}></label>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
