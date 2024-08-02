import { useState } from 'react';

const EditBannerTemplateBs = ({ ad, onSave }) => {
    const [editAd, setEditAd] = useState(ad);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditAd({ ...editAd, [name]: value });
    };

    const handleSave = () => {
        onSave(editAd);
    };

    return (
        <div className="bottom-sheet">
            <input name="title" value={editAd.title} onChange={handleChange} />
            <input name="description" value={editAd.description} onChange={handleChange} />
            <input name="cta" value={editAd.cta} onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditBannerTemplateBs;
