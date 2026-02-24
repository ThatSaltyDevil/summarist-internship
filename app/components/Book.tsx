import React from 'react'
import Styles from '../styles/Book.module.css'
import { LuBookOpenText } from 'react-icons/lu';
import { FiMic } from 'react-icons/fi';
import { FaRegClock, FaRegStar } from 'react-icons/fa6';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BsBookmark } from 'react-icons/bs';

const Book = () => {
  return (
    <div className={Styles.row}>
      <div className={Styles.container}>
        <div className={Styles.book__wrapper}>
          <div className={Styles.book__info}>
            <div className={Styles.book__title}>Title</div>
            <div className={Styles.book__author}>Author</div>
            <div className={Styles.book__subtitle}>Subtitle</div>
            <div className={Styles.book__features__wrapper}>
              <div className={Styles.book__features}>
                <div className={Styles.book__feature}>
                  <div className={Styles.feature__icon__wrapper}>
                    <FaRegStar className={Styles.feature__icon} />
                  </div>
                  <div className={Styles.book__rating}>0.0</div>
                  <div className={Styles.book__overall}>(ratings)</div>
                </div>
                <div className={Styles.book__feature}>
                  <div className={Styles.feature__icon__wrapper}>
                    <FaRegClock className={Styles.feature__icon} />
                  </div>
                  <div className={Styles.book__duration}>00:00</div>
                </div>
                <div className={Styles.book__feature}>
                  <div className={Styles.feature__icon__wrapper}>
                    <FiMic className={Styles.feature__icon} />
                  </div>
                  <div className={Styles.book__type}>Audio & Text</div>
                </div>
                <div className={Styles.book__feature}>
                  <div className={Styles.feature__icon__wrapper}>
                    <HiOutlineLightBulb className={Styles.feature__icon} />
                  </div>
                  <div className={Styles.book__key_ideas}># key ideas</div>
                </div>
              </div>
            </div>
            <div className={Styles.book__buttons}>
              <button className={Styles.book__button}>
                <LuBookOpenText className={Styles.book__button__icon} />
                <div className={Styles.book__button__text}>Read</div>
              </button>
              <button className={Styles.book__button}>
                <FiMic className={Styles.book__button__icon} />
                <div className={Styles.book__button__text}>Listen</div>
              </button>
            </div>
            <div className={Styles.bookmark}>
              <div className={Styles.bookmark__icon__wrapper}>
                <BsBookmark className={Styles.bookmark__icon} />
              </div>

              <div className={Styles.bookmark__text}>
                Add title to my library
              </div>
            </div>
            <div className={Styles.book__section__title}>What's it about?</div>
            <div className={Styles.book__tags__wrapper}>
              <div className={Styles.book__tag}>Communication</div>
              <div className={Styles.book__tag}>Technology</div>
            </div>
            <div className={Styles.book__description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              cumque deleniti nihil commodi id culpa impedit accusantium
              repellendus fugiat ad vero asperiores reiciendis alias harum
              laudantium omnis pariatur libero autem perspiciatis, dicta
              blanditiis! Ab accusantium eius sapiente hic, atque ullam!
            </div>
            <div className={Styles.book__section__title}>About the author</div>
            <div className={Styles.author__description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              cumque deleniti nihil commodi id culpa impedit accusantium
              repellendus fugiat ad vero asperiores reiciendis alias harum
              laudantium omnis pariatur libero autem perspiciatis, dicta
              blanditiis! Ab accusantium eius sapiente hic, atque ullam!
            </div>
          </div>
          <div className={Styles.book__image__wrapper}>
            <div className={Styles.book__image}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book