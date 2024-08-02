import { useState } from 'react';
import EditBannerTemplateBs from './EditBannerTemplateBs';

const BannerImageComp = ({ ad }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [currentAd, setCurrentAd] = useState(ad);

    const handleEdit = () => {
        setShowEdit(true);
    };

    const handleSave = (editedAd) => {
        setCurrentAd(editedAd);
        setShowEdit(false);
    };

    return (
        <div className="banner" style={{ backgroundImage: `url(${currentAd.background})` }}>
            <h2>{currentAd.title}</h2>
            <p>{currentAd.description}</p>
            <button>{currentAd.cta}</button>
            <button onClick={handleEdit}>Edit</button>
            {showEdit && <EditBannerTemplateBs ad={currentAd} onSave={handleSave} />}
        </div>
    );
};

export default BannerImageComp;
