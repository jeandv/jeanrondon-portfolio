import React from 'react';
// import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href='https://www.linkedin.com/in/jeandv/' target='https://www.linkedin.com/in/jeandv/'>
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href=' https://github.com/jeandv' target=' https://github.com/jeandv'>
                <BsGithub />
            </a>
        </div>
        {/* <div>
            <a href='https://twitter.com/r4yb4' target='https://twitter.com/r4yb4'>
                <BsTwitter />
            </a>
        </div>
        <div>
            <a href='https://www.instagram.com/_.jeanr' target='https://www.instagram.com/jeanr.js'>
                <BsInstagram />
            </a>
        </div> */}
    </div>
);

export default SocialMedia;