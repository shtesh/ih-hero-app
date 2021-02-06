import React from 'react';

const styles = {
    a: {
        margin: '10px'
    }
}

function Navbar({ logo, title, links }) {
    return (
        <div>
            <div>
                <img src={logo.src} alt={logo.alt}/>
            </div>
            <div>
                <h3>{title}</h3>
                {
                    links.map(({ to, label }, id) => <a style={styles.a} href={to} key={id}>{label}</a>)
                }
            </div>
        </div>
    )
}

export default Navbar

