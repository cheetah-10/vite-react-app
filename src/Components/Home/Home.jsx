import './Home.css'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic3.jpg'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

function Home() {

    let [largeImageSrc, setlargeImageSrc] = useState(null);

    useEffect(() => {
        document.querySelectorAll('img').forEach((image) => {
            image.addEventListener('click', (e) => {
                let picSrc = e.target.getAttribute("src");
                setlargeImageSrc(picSrc); 
            });
        });
    }, []);

    const closeImage = (e) => {
        if (e.target.tagName !== 'IMG') {
            setlargeImageSrc(null); 
        }
    }

    return (<>
        <div className="parentTitile position-relative">
            <h1 className='text-uppercase text-center title'>fast react pizza</h1>
        </div>

        <h2 className='text-uppercase m-auto title2'>our menu</h2>
        <div className="description text-center mt-4">
            <p className='mb-0'>best pizza restaurant ever !!</p>
            <p className='mt-0'>Cairo ,Egypt</p>
        </div>

        <div className="menuContainer m-auto">
            <div className="row g-3">
                <div className="col-md-6">
                    <div className="item">
                        <div className="row ">
                            <div className="col-lg-4">
                                <div className="picture position-relative">
                                    <img src={pic1} alt="pizza" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h3>Focaccia</h3>
                                <p className=''>Bread with italian olive oil and rosemary</p>
                                <p className='p'>6</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="item">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="picture">
                                    <img src={pic2} alt="pizza" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h3>Pizza margherita</h3>
                                <p className=''>tomato and mozarella</p>
                                <p className=''>18</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="item">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="picture">
                                    <img src={pic2} alt="pizza" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h3>Pizza margherita</h3>
                                <p className=''>tomato and mozarella</p>
                                <p className='p'>18</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="item">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="picture">
                                    <img src={pic2} alt="pizza" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h3>Pizza spinaci</h3>
                                <p className=''>tomato, mozarella, spinach and ricotta cheese</p>
                                <p className='p'>12</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="item">
                        <div className="row sold">
                            <div className="col-lg-4">
                                <div className="picture">
                                    <img src={pic2} alt="pizza" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h3>Pizza salamino</h3>
                                <p className=''>tomato and mozarella</p>
                                <p className='p'>sold out</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="item">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="picture">
                                    <img src={pic1} alt="pizza" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h3>Focaccia</h3>
                                <p className=''>Bread with italian olive oil and rosemary</p>
                                <p className='p'>6</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cont mt-5 mb-5">
                <p className='fw-bold text-center'>We're Open untill 22.00</p>
                <Link to='Form' className=' order m-auto'>Order</Link>
            </div>
        </div>

        {largeImageSrc && (
            <div className="imageShow" onClick={closeImage}>
                <img src={largeImageSrc} className='largeImage' alt="Large View" />
            </div>
        )}
    </>);
}

export default Home;
