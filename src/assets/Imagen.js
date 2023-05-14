import React from "react";
import Profile from "../assets/fotoWEB.webp";
import { motion } from "framer-motion";

const ImageProfile = () => {
    return (
        <>
            <motion.img src={Profile} alt="Alba Arenas"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 1.2, ease: "easeInOut", delay: 3.5 },
                }} />
        </>
    )
}

export default ImageProfile