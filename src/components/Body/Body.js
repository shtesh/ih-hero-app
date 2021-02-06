import React from 'react';

const image = {
  height: 100,
  width: 100
}

function Body({
  utilsSection: {sectionTitle, cards}, 
  developersSection: {sectionTitle: developersTitle, sectionDescription, developers},
}) {
  return (
      <div>
          <section>
              <h4>{sectionTitle}</h4>
              <Cards>
                {cards}
              </Cards>
          </section>
          <section>
              <h4>{developersTitle}</h4>
              <h5>{sectionDescription}</h5>
              {
                  developers.map(({name, description, developerImg:{src, alt}}, id) => (
                      <div key={id}>
                          <p>{name}</p>
                          <p>{description}</p>
                          <img src={src} alt={alt} style={image}/>
                      </div>
                  ))
              }
          </section>
      </div>
  );
}

function Cards({ children }) {
  return children.map(({ utilName, utilDescription, utilImg }, id) => (
      <div key={id}>
          <p>{utilName}</p>
          <p>{utilDescription}</p>
          <img style={image} src={utilImg.src} alt={utilImg.alt} />
      </div>
  ))
}

export default Body;