
import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { images } from '../../constants';
import './Header.scss';

// const scaleVariants = {
//     whileInView: {
//         scale: [0, 1],
//         opacity: [0, 1],
//         transition: {
//             duration: 1,
//             ease: 'easeInOut',
//         },
//     },
// };

const Header = () => (
    <div className="app__header app__flex">
        {/* <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__header-info"
        >
            <div className="app__header-badge">
                <div className="badge-cmp app__flex">
                    <span>👋</span>
                    <div style={{ marginLeft: 20 }}>
                        <p className="p-text">Hola, me llamo</p>
                        <h1 className="head-text">Jean</h1>
                    </div>
                </div>

                <div className="tag-cmp app__flex">
                    <p className="p-text">Y soy</p>
                    <p className="p-text"><strong>Frontend</strong> web</p>
                    <p className="p-text">Developer</p>
                </div>
            </div>
        </motion.div> */}
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            whileHover={{ scale: 1.020 }}
            className="app__header-img"
        >
            <h1 className='tituloEfecto'>
                <span className='textoEfecto1'>
                    Hola, soy
                </span>
                <span className='textoEfecto2'>
                    Frontend
                </span>
                <span className='textoEfecto3'>
                    Developer.
                </span>
            </h1>
        </motion.div>

        {/* <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
        >
            {[images.javascript, images.react, images.sass].map((circle, index) => (
                <div className="circle-cmp app__flex" key={`circle-${index}`}>
                    <img src={circle} alt="profile_bg" />
                </div>
            ))}
        </motion.div> */}
    </div>
);

export default AppWrap(MotionWrap(Header, 'home'), 'home', 'app_whitebg');