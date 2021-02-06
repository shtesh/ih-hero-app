import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';

function Main({ navbar, body, footer, hero }) {
    return (
    <React.Fragment>
        <Navbar logo={navbar.logo} title={navbar.title} links={navbar.links} />
        <Hero title={hero.title} subtitle={hero.subtitle} img={hero.img} />
        <Body utilsSection={body.utilsSection} developersSection={body.developerSection} />
        <Footer contact={footer.contact} links={footer.links} />
    </React.Fragment>
    )
}

export default Main

// Props de Navbar ---> { logo: navbar.logo, title: navbar.title, links: navbar.links }
// Props de Hero ---> { title: hero.title, subtitle: hero.subtitle, img: hero.img }
// Props de Body ---> { utilsSection: body.utilsSection, developersSection: body.developersSection }