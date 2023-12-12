import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import useKeypress from "react-use-keypress";
import Img1 from '../assets/carousel/1.webp'
import Img2 from '../assets/carousel/2.webp'
import Img3 from '../assets/carousel/3.webp'
import Img4 from '../assets/carousel/4.webp'
import Img5 from '../assets/carousel/5.webp'
import Img6 from '../assets/carousel/6.webp'
import Img7 from '../assets/carousel/7.webp'
import Img8 from '../assets/carousel/8.webp'
import Img9 from '../assets/carousel/9.webp'
import Img10 from '../assets/carousel/10.webp'



const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
];

const collapsedAspectRatio = 1 / 3;
const fullAspectRatio = 3 / 2;
const gap = 2;
const margin = 12;

export default function Carousel() {
    const [index, setIndex] = useState(0);

    useKeypress("ArrowRight", () => {
        if (index + 1 < images.length) {
            setIndex(index + 1);
        }
    });

    useKeypress("ArrowLeft", () => {
        if (index > 0) {
            setIndex((i) => i - 1);
        }
    });

    return (

        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
            <div className="h-full bg-[#151515] container px-6 py-12 mx-auto">
            <div className="flex flex-col items-center justify-center w-full py-8">
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-normal heading-text tracking-wide text-center text-gray-100 lg:text-4xl">Glimpses</h1>
            </div>
                <div className="mx-auto flex h-full max-w-4xl flex-col justify-center">
                    <div className="relative overflow-hidden">
                        <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
                            {images.map((image, i) => (
                                <motion.img
                                    key={image}
                                    src={image}
                                    animate={{ opacity: i === index ? 1 : 0.3 }}
                                    className="aspect-[3/2] w-full flex-shrink-0 object-cover"
                                />
                            ))}
                        </motion.div>
                        <AnimatePresence initial={false}>
                            {index > 0 && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.7 }}
                                    exit={{ opacity: 0, pointerEvents: "none" }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                                    onClick={() => setIndex(index - 1)}
                                >
                                    <CiCircleChevLeft className="h-6 w-6" />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        <AnimatePresence initial={false}>
                            {index + 1 < images.length && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.7 }}
                                    exit={{ opacity: 0, pointerEvents: "none" }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                                    onClick={() => setIndex(index + 1)}
                                >
                                    <CiCircleChevRight className="h-6 w-6" />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="absolute inset-x-0 bottom-6 flex justify-center overflow-hidden">
                        <motion.div
                            initial={false}
                            animate={{
                                x: `-${index * 100 * (collapsedAspectRatio / fullAspectRatio) +
                                    index * gap +
                                    margin
                                    }%`,
                            }}
                            style={{ aspectRatio: fullAspectRatio, gap: `${gap}%` }}
                            className="flex h-14"
                        >
                            {images.map((image, i) => (
                                <motion.button
                                    key={image}
                                    onClick={() => setIndex(i)}
                                    whileHover={{ opacity: 1 }}
                                    initial={false}
                                    animate={i === index ? "active" : "inactive"}
                                    className="flex-shrink-0"
                                    variants={{
                                        active: {
                                            marginLeft: `${margin}%`,
                                            marginRight: `${margin}%`,
                                            opacity: 1,
                                            aspectRatio: fullAspectRatio,
                                        },
                                        inactive: {
                                            marginLeft: "0%",
                                            marginRight: "0%",
                                            opacity: 0.5,
                                            aspectRatio: collapsedAspectRatio,
                                        },
                                    }}
                                >
                                    <motion.img src={image} className="h-full object-cover" />
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </MotionConfig>
    );
}
