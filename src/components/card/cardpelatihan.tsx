import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/card.css'

const Card = ({ accountEmail }: { accountEmail: string }) => {
    const router = useNavigate();

    const handlePesanSekarang = () => {
        if (accountEmail !== '') {
            router('/payment');
        } else {
            router('/webinar3');
        }
    };

    return (
        <div className='mx-auto max-w-[1910px] max-h-[1728px] relative'>
            <div className='sm:pt-20 sm:pb-20 sm-440:pt-20 sm-440:pb-20'>
                <div className='container-card'>
                    <div className="card-container">
                        <div className="image-container">
                            <div className="heading">Rp 375.000</div>
                            <img src='/images/dokter.webp' alt="/" />
                        </div>
                        <div className="card-title">
                            <h3 className='text'>Pelatihan 1</h3>
                        </div>
                        <div className="card-body">
                            <p className='text'>
                                <a href="/">Berisi penjelasan disini... </a>
                                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                        </div>
                        <div className="btn">
                            <button className="button" onClick={handlePesanSekarang}>Pesan Sekarang</button>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="image-container">
                            <div className="heading">Rp 375.000</div>
                            <img src='/images/dokter.webp' alt="/" />
                        </div>
                        <div className="card-title">
                            <h3 className='text'>Pelatihan 2</h3>
                        </div>
                        <div className="card-body">
                            <p className='text'>
                                <a href="/">Berisi penjelasan disini... </a>
                                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                        </div>
                        <div className="btn">
                            <button className="button" onClick={handlePesanSekarang}>Pesan Sekarang</button>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="image-container">
                            <div className="heading">Rp 375.000</div>
                            <img src='/images/dokter.webp' alt="/" />
                        </div>
                        <div className="card-title">
                            <h3 className='text'>Pelatihan 3</h3>
                        </div>
                        <div className="card-body">
                            <p className='text'>
                                <a href="/">Berisi penjelasan disini... </a>
                                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                        </div>
                        <div className="btn">
                            <button className="button" onClick={handlePesanSekarang}>Pesan Sekarang</button>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="image-container">
                            <div className="heading">Rp 375.000</div>
                            <img src='/images/dokter.webp' alt="/" />
                        </div>
                        <div className="card-title">
                            <h3 className='text'>Pelatihan 4</h3>
                        </div>
                        <div className="card-body">
                            <p className='text'>
                                <a href="/">Berisi penjelasan disini... </a>
                                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                        </div>
                        <div className="btn">
                            <button className="button" onClick={handlePesanSekarang}>Pesan Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Founding = ({ accountEmail }: { accountEmail: string }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? <ImageSlider accountEmail={accountEmail} /> : <Card accountEmail={accountEmail} />;
};


const ImageSlider = ({ accountEmail }: { accountEmail: string }) => {
    const navigate = useNavigate();

    const handlePesanSekarang = () => {
        if (accountEmail !== '') {
            navigate('/payment');
        } else {
            navigate('/webinar3');
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="container-slider" style={{ padding: '20px' }}>
            <Slider {...settings}>
                <div className="card-container">
                    <div className="image-container">
                        <div className="heading">Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="card-title">
                        <h3 className='text'>Pelatihan 1</h3>
                    </div>
                    <div className="card-body">
                        <p className='text'>
                            <a href="/">Berisi penjelasan disini... </a>
                            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                    </div>
                    <div className="btn">
                        <button className="button" onClick={handlePesanSekarang}>Pesan Sekarang</button>
                    </div>
                </div>
                <div className="card-container">
                    <div className="image-container">
                        <div className="heading">Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="card-title">
                        <h3 className='text'>Pelatihan 2</h3>
                    </div>
                    <div className="card-body">
                        <p className='text'>
                            <a href="/">Berisi penjelasan disini... </a>
                            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                    </div>
                    <div className="btn">
                        <button className="button" onClick={handlePesanSekarang}>Pesan Sekarang</button>
                    </div>
                </div>
                <div className="card-container">
                    <div className="image-container">
                        <div className="heading">Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="card-title">
                        <h3 className='text'>Pelatihan 3</h3>
                    </div>
                    <div className="card-body">
                        <p className='text'>
                            <a href="/">Berisi penjelasan disini... </a>
                            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                    </div>
                    <div className="btn">
                        <button className="button" onClick={handlePesanSekarang}>Pesan Sekarang</button>
                    </div>
                </div>
                <div className="card-container">
                    <div className="image-container">
                        <div className="heading">Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="card-title">
                        <h3 className='text'>Pelatihan 4</h3>
                    </div>
                    <div className="card-body">
                        <p className='text'>
                            <a href="/">Berisi penjelasan disini... </a>
                            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                    </div>
                    <div className="btn">
                        <button className="button" onClick={handlePesanSekarang}>Pesan Sekarang</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Founding;