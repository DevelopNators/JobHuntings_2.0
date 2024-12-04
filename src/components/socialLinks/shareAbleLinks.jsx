import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const ShareableLinks = ({ url, title }) => {
    // Validate title and url
    const shareTitle = title || "Check this out!";
    const shareUrl = url || "https://example.com";

    // Shareable URLs for social platforms
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
    const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`;
    const youtubeShareUrl = `https://www.youtube.com/share?url=${encodeURIComponent(shareUrl)}`;
    const whatsappShareUrl = `whatsapp://send?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`;

    console.log("WhatsApp Share URL:", whatsappShareUrl); 

    return (
        <div className="d-flex">
            <div style={{ fontSize: '1.5rem', display: 'flex', gap: '0.5rem',  alignItems:'center', justifyContent:'center'}}>
                Share:
                <div className="social-icons" style={{ display: 'flex', gap: '1rem' }}>
                    {/* Facebook */}
                    <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#4267B2' }}>
                        <FaFacebook />
                    </a>
                    {/* Twitter */}
                    <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2' }}>
                        <FaTwitter />
                    </a>
                   
                   
                    {/* WhatsApp */}
                    <a
                        href={whatsappShareUrl?whatsappShareUrl: '' }
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#25D366' }}
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ShareableLinks;
