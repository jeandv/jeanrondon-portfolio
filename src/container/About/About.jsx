<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Sobre <span>mí</span></h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text">{about.description}</p>
                        <a href='https://www.canva.com/design/DAFAN-YP2CA/tKvPjmx8slDoK_cICZ7IZw/view?utm_content=DAFAN-YP2CA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target='_blank' rel='noreferrer' className='ver-cv'>Ver CV</a>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

// export default MotionWrap(About, 'app__about');

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');

// export default About;
=======
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Sobre <span>mí</span></h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text">{about.description}</p>
                        <a href='https://www.canva.com/design/DAFAN-YP2CA/tKvPjmx8slDoK_cICZ7IZw/view?utm_content=DAFAN-YP2CA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target='_blank' rel='noreferrer' className='ver-cv'>Ver CV</a>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

// export default MotionWrap(About, 'app__about');

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');

// export default About;
>>>>>>> 4d0818b (cambios-2)
