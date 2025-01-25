import { motion, useMotionValue, useScroll, useSpring, useTransform, useMotionTemplate } from "framer-motion";


const Web = () => {
    const { scrollYProgress } = useScroll();

    const translateC = useTransform(scrollYProgress, [0.3, 0.5], [0, 800]);
    const colorT = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.51], ["white", "white", "black", "white"]);
    const colorF = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.51], ["black", "black", "white", "black"]);
    const scaleF = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.51], [1, 1, 1.5, 1]);
    const opacityF = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.51], [0, 0, 1, 0]);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const Xspring = useSpring(x);
    const Yspring = useSpring(y);
    const ROTATION_RANGE = 60;
    const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
    const transform = useMotionTemplate`rotateX(${Xspring}deg) rotateY(${Yspring}deg)`;

    const handleMmove = (e) => {


        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);

    };

    function handleMleave(e) {
        x.set(0);
        y.set(0);

    }

    return (
        <motion.div className="text-center h-500"
            style={{
                translateY: translateC,

            }}>
            <motion.div
                style={{
                    scale: scaleF,
                    color: colorF,
                    backgroundColor: colorT,
                    opacity: opacityF
                }}
            >
                <span className="text-[40px]  font-bold mt-30 pt-30">Tired of being a part of the algorithm...</span>

            </motion.div>
            <motion.div
                style={{
                    scale: scaleF,
                    color: colorF,
                    backgroundColor: colorT,
                }}
            >
                <span className="text-[40px]  font-bold mt-30 pt-30">Tired of being a part of the algorithm...</span>

            </motion.div>
            <motion.div
                style={{
                    scale: scaleF,
                    color: colorF,
                    backgroundColor: colorT,
                    opacity: opacityF
                }}
            >
                <span className="text-[40px]  font-bold mt-30 pt-30">Tired of being a part of the algorithm...</span>

            </motion.div>
            <motion.div
                onMouseMove={handleMmove}
                onMouseLeave={handleMleave}
                className="relative text-center">
                <div className="absolute">
                    <span className="text-[40px]  font-bold ">Break Through</span>
                    <span className="text-[40px]  font-bold ">This WEB</span>
                </div>
                <div
                    className="flex justify-center space-x-30 mt-60">
                    <motion.div

                        style={{
                            transform,
                            transformStyle: "preserve-3d"
                        }}>
                        <img
                            src="src/assets/web1.svg" className="w-25" />
                    </motion.div>
                    <motion.div

                        style={{
                            transform,
                            transformStyle: "preserve-3d"
                        }}>
                        <img
                            src="src/assets/web2.svg" className="w-25" />
                    </motion.div>
                    <motion.div

                        style={{
                            transform,
                            transformStyle: "preserve-3d"
                        }}>
                        <img
                            src="src/assets/web3.svg" className="w-25" />
                    </motion.div>

                </div>
                <div className="flex justify-between mx-30">
                    <motion.div

                        style={{
                            transform,
                            transformStyle: "preserve-3d"
                        }}>
                        <img
                            src="src/assets/web2.svg" className="w-30" />
                    </motion.div>
                    <motion.div

                        style={{
                            transform,
                            transformStyle: "preserve-3d"
                        }}>
                        <img
                            src="src/assets/web3.svg" className="w-30" />
                    </motion.div>
                    <motion.div

                        style={{
                            transform,
                            transformStyle: "preserve-3d"
                        }}>
                        <img
                            src="src/assets/web1.svg" className="w-30 " />
                    </motion.div>
                </div>
                <div
                    className="flex justify-center space-x-30">
                    <motion.div

                        style={{
                            transform,
                            transformStyle: "preserve-3d"
                        }}>
                        <img
                            src="src/assets/web3.svg" className="w-25 " />
                    </motion.div>
                    <motion.div

                        style={{
                            transform,
                            transformStyle: "preserve-3d"
                        }}>
                        <img
                            src="src/assets/web1.svg" className="w-25" />
                    </motion.div>
                    <motion.div
                        style={{
                            transform,
                            transformStyle: "preserve-3d"
                        }}>
                        <img
                            src="src/assets/web2.svg" className="w-25" />
                    </motion.div>

                </div>
            </motion.div>
        </motion.div>
    )
}

export default Web