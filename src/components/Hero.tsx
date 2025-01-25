
import { motion, useScroll, useTransform } from "framer-motion";
import video from "../assets/3209858-uhd_3840_2160_25fps.mp4";
import phone from "../assets/phone.svg";
const Hero = () => {

    const { scrollYProgress } = useScroll();

    const opacityA = useTransform(scrollYProgress, [0, 0.03, 0.1, 0.15], [0, 1, 0.8, 0]);
    const opacityP = useTransform(scrollYProgress, [0, 0.04, 0.05], [0, 0, 1]);
    const opacityT = useTransform(scrollYProgress, [0, 0.04, 0.05, 0.07], [0, 0, 1, 0])
    const opacityV = useTransform(scrollYProgress, [0.15, 0.2], [0, 1]);
    const scaleP = useTransform(scrollYProgress, [0.1, 0.2], [1, 1.5]);
    const rotateP = useTransform(scrollYProgress, [0.1, 0.2], [0, 90]);
    const translateP = useTransform(scrollYProgress, [0.15, 0.2], [0, 130]);
    const translateC = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.3], [0, 1000, 1600, 0]);





    return (
        <div className="flex justify-center h-500">
            <motion.div
                style={{
                    translateY: translateC
                }}>

                <motion.div
                    style={{
                        opacity: opacityA,

                    }}
                    className="max-w-5xl mx-auto text-center m-15 flex justify-center items-center"
                >
                    <h1 className="text-4xl font-semibold">
                        ARE
                    </h1>
                </motion.div>

                <div className="flex">
                    <motion.div
                        style={{
                            opacity: opacityT
                        }}
                    >
                        <span className="text-[80px] font-bold"> ST</span>
                    </motion.div>
                    <div className="flex justify-center">
                        <motion.div
                            style={{
                                opacity: opacityP,
                                scale: scaleP,
                                rotate: rotateP,
                                translateY: translateP
                            }}
                            className=" relative">
                            <img
                                src={phone} className="w-50" />
                        </motion.div>
                        <div className="absolute">
                            <motion.div style={{
                                opacity: opacityA
                            }}>
                                <span className="text-[140px] font-bold ml-38">U</span>


                            </motion.div>
                            <motion.div style={{
                                opacity: opacityV
                            }}>

                                <video width="600" height="560" autoPlay loop>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        style={{
                            opacity: opacityT
                        }}>
                        <span className="text-[80px] font-bold">CK</span>
                    </motion.div>
                </div>

            </motion.div>


        </div>
    );
};


export default Hero;