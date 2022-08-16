import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href='https://www.linkedin.com/in/jeandv/' target='https://www.linkedin.com/in/jeandv/'>
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href=' https://github.com/jeandv' target='https://github.com/jeandv'>
                <BsGithub />
            </a>
        </div>
    </div>
);

export default SocialMedia;
