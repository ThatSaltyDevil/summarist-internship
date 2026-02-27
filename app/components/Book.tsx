'use client'
import React from 'react'
import Styles from '../styles/Book.module.css'
import { LuBookOpenText } from 'react-icons/lu';
import { FiMic } from 'react-icons/fi';
import { FaRegClock, FaRegStar } from 'react-icons/fa6';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BsBookmark } from 'react-icons/bs';
import { useParams } from 'next/navigation';
import { useGetBookByIDQuery } from '@/Redux/features/apiSlice';
import Link from 'next/link';


export default function Book({ initialId }: { initialId?: string}) {
  const params = useParams<{ id: string }>();
  const id = initialId || params.id;
  const { data, isLoading, isError } = useGetBookByIDQuery(id)

if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Error loading product</div>;
console.log(data)
  return (
    <div className={Styles.row}>
      <div className={Styles.container}>
        <div className={Styles.book__wrapper}>
          <div className={Styles.book__info}>
            <div className={Styles.book__title}>{data.title}</div>
            <div className={Styles.book__author}>{data.author}</div>
            <div className={Styles.book__subtitle}>{data.subTitle}</div>
            <div className={Styles.book__features__wrapper}>
              <div className={Styles.book__features}>
                <div className={Styles.book__feature}>
                  <div className={Styles.feature__icon__wrapper}>
                    <FaRegStar className={Styles.feature__icon} />
                  </div>
                  <div className={Styles.book__rating}>
                    {data.averageRating}
                  </div>
                  <div className={Styles.book__overall}>
                    ({data.totalRating} ratings)
                  </div>
                </div>
                <div className={Styles.book__feature}>
                  <div className={Styles.feature__icon__wrapper}>
                    <FaRegClock className={Styles.feature__icon} />
                  </div>
                  <div className={Styles.book__duration}>--:--</div>
                </div>
                <div className={Styles.book__feature}>
                  <div className={Styles.feature__icon__wrapper}>
                    <FiMic className={Styles.feature__icon} />
                  </div>
                  <div className={Styles.book__type}>{data.type}</div>
                </div>
                <div className={Styles.book__feature}>
                  <div className={Styles.feature__icon__wrapper}>
                    <HiOutlineLightBulb className={Styles.feature__icon} />
                  </div>
                  <div className={Styles.book__key_ideas}>
                    {data.keyIdeas} key ideas
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.book__buttons}>
              <Link className={Styles.book__button} href={`/player/${data.id}`}>
                <LuBookOpenText className={Styles.book__button__icon} />
                <div className={Styles.book__button__text}>Read</div>
              </Link>
              <Link className={Styles.book__button} href="">
                <FiMic className={Styles.book__button__icon} />
                <div className={Styles.book__button__text}>Listen</div>
              </Link>
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
              {data.tags[0] && (
                <div className={Styles.book__tag}>{data.tags[0]}</div>
              )}
              {data.tags[1] && (
                <div className={Styles.book__tag}>{data.tags[1]}</div>
              )}
              
            </div>
            <div className={Styles.book__description}>{data.bookDescription}</div>
            <div className={Styles.book__section__title}>About the author</div>
            <div className={Styles.author__description}>
              {data.authorDescription}
            </div>
          </div>
          <div className={Styles.book__image__wrapper}>
            <img className={Styles.book__image} src={data.imageLink}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

