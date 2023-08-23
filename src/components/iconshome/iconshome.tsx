import { Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CgArrowTopRightO, CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import useCardHyperlink from '../../hooks/useCardHyperlink';

const Profile = () => {
    const pages = ['Webinar', 'Konsultasi', 'Layanan', 'Pelatihan'];
    const [activePage, setActivePage] = useState(0);

    const handlePrev = () => {
        setActivePage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
    };

    const handleNext = () => {
        setActivePage((prevPage) => (prevPage + 1) % pages.length);
    };

    const { content, loading } = useCardHyperlink();

    console.log(content)

    return (
        <div>
            {loading ? (
                <div className='relative top-[100px]'>
                    <Skeleton variant="rectangular" width={1600} height={500} />
                </div>
            ) : (
                <>
                    <div>
                        <div className="lg:max-w-[80rem] mx-auto mt-[200px] py-5">
                            <ul className="flex items-center justify-center sm-440:flex">
                                {pages.map((page, index) => (
                                    <li
                                        key={index}
                                        className={`ml-5 lg:text-[24px] sm-440:text-[10px] sm-440:font-bold p-5 ${activePage === index ? 'text-[#ffffff] bg-[#002157]' : 'text-[#002157]'
                                            } rounded-md cursor-pointer duration-500`}
                                        onClick={() => setActivePage(index)}
                                    >
                                        <a href={`#${page}`}>{page.charAt(0).toUpperCase() + page.slice(1)}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className=''>
                        {content.map((res: any, index: number) => (
                            <div key={index} className={activePage === index ? 'flex' : 'hidden'} id={pages[index]}>
                                <div className='flex items-center justify-center ml-[300px] mt-[80px]'>
                                    <img src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`} alt="image" className="lg:w-[400px] sm-440:w-[120px] aspect-auto object-cover" />
                                    <div className='lg:ml-10 sm-440:ml-3'>
                                        <h1 className='lg:text-[32px] sm-440:text-[12px] lg:w-[500px] font-bold text-[#002157]' dangerouslySetInnerHTML={{ __html: res.attributes.title }}></h1>
                                        <br />
                                        <p className='lg:text-[24px] lg:w-[500px] sm-440:text-[12px]' dangerouslySetInnerHTML={{ __html: res.attributes.body }}></p>
                                        <br />
                                        <div className="text-sm md:text-lg lg:text-xl sm-440:text-[10px] font-bold text-[#002157] mt-[2px] flex items-center">
                                            <a href={res.attributes.links}>Lihat selengkapnya</a>
                                            <CgArrowTopRightO className="ml-[5px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='relative bottom-[100px]'>
                            <div className='lg:relative lg:right-[720px] sm-440:relative sm-440:right-[190px] sm-440:bottom-[120px]'>
                                <button
                                    className="lg:mt-10 lg:ml-5 lg:text-[24px] lg:p-5 text-[#002157] rounded-md cursor-pointer duration-500"
                                    onClick={handlePrev}
                                >
                                    <CgChevronLeft />
                                </button>
                            </div>
                            <div className='lg:relative sm-440:relative lg:left-[720px] lg:bottom-[190px] sm-440:left-[190px] sm-440:bottom-[150px]'>
                                <button
                                    className="lg:ml-5 lg:text-[24px] lg:p-5 text-[#002157] rounded-md cursor-pointer duration-500"
                                    onClick={handleNext}
                                >
                                    <CgChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
