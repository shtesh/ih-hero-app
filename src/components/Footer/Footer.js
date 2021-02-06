import React from 'react';

function Footer({links, contact:{email, phone, address:{country, street, state}}}) {
    return (
        <div>
          <div>
            <p>Contact</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: </p>
            <p>{country}</p>
            <p>{state}</p>
            <p>{street}</p>
        </div>
            {
                links.map(({to, label}, id) => <a key={id} href={to}>{label}</a>)
            }
        </div>
    )
}

export default Footer 