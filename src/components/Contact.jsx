import React from 'react';

const Contact = () => {
    const linkedinLink = 'https://www.linkedin.com/your-linkedin-profile';
    const instagramLink = 'https://www.instagram.com/your-instagram-profile';

    return (
        <div>
            <h1>Contact</h1>
            <p>LinkedIn: <a href={linkedinLink}>{linkedinLink}</a></p>
            <p>Instagram: <a href={instagramLink}>{instagramLink}</a></p>
        </div>
    );
};

export default Contact;