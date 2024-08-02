import { useEffect, useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';

const Home = () => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        fetch('/ads.json')
            .then((response) => response.json())
            .then((data) => setAds(data));
    }, []);

    return (
        <div>
            {ads.map((ad, index) => (
                <BannerImageComp key={index} ad={ad} />
            ))}
        </div>
    );
};

export default Home;
