import React from 'react';

const image = {
    height: 100,
    width: 100
}

function Hero({ title, subtitle, img }) {
    return (
    <div>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <div>
        <img src={img.src} alt={img.alt} />
        </div>
    </div>
    )
}

export default Hero