'use client'



import { motion } from 'framer-motion';

import { useState } from 'react';



const anim = {

    initial: { width: 0 },

    open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },

    closed: { width: 0 }

}



export default function index({ project }) {



    const [isActive, setIsActive] = useState(false);



    const { title1, title2, src } = project;

    return (

        <div onMouseEnter={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} className="border-t-2 border-solid border-blue-velt-950 pt-2 pb-2 cursor-pointer w-full flex justify-center items-center "
        >

            <p className=" text-3xl lg:text-6xl m-0 mr-3">{title1}</p>

            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className="flex items-center">

                <img src={`/images/${src}`} alt="Project Image" className="w-40" />

            </motion.div>

            <p className=" text-3xl lg:text-6xl ml-3">{title2}</p>

        </div>

    )

}