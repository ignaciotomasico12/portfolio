'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function AnimatedLogo() {
    const logoRef1 = useRef<SVGGElement>(null);
    const logoRef2 = useRef<SVGGElement>(null);
    const logoRef3 = useRef<SVGGElement>(null);

    const { scrollYProgress } = useScroll();

    // Scroll Parallax Effects
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -10]);
    
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 5]);
    
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 15]);

    const viewBox = "0 -750 958 2500";

    // Continuous Levitation Animation
    const floatAnim = (delay: number) => ({
        y: [-15, 15, -15],
        transition: {
            delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    });

    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={viewBox} xmlSpace="preserve" width="450px"> 
            <style type="text/css">
                {
                    "\n\t.st0{fill:#00FFC3;}\n\t.st1{fill:url(#SVGID_1_);}\n\t.st2{fill:url(#SVGID_2_);}\n\t.st3{fill:url(#SVGID_3_);}\n"
                }
            </style>
            
            <motion.g ref={logoRef1} style={{ y: y1, rotate: rotate1 }}>
                <motion.g animate={floatAnim(0)} whileHover={{ scale: 1.1, rotate: 5 }}>
                    <path className="st0" d="M414.9,127.3L123.1,324c0,0-52.5,34.4-66.2,123.1v157c0,0,3,59.9,52,104l8.8,8.8l69,48.8l-30.8-64.1 c0,0-28.4-67.2,19.2-100.6l354.1-241.3c0,0,25.8-21.5,25.7-62.3v-91.3C554.9,206.2,529.7,83.1,414.9,127.3z"/>
                    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1={147.4272} y1={436.4147} x2={546.4} y2={436.4147} gradientTransform="matrix(1 0 0 1 0 288)">
                        <stop offset={0.005586592} style={{stopColor: "#007B5E"}}/>
                        <stop offset={0.9992} style={{stopColor: "#007B5E"}}/>
                        <stop offset={1} style={{stopColor: "#007B5E"}}/>
                    </linearGradient>
                    <path className="st1" d="M288.5,523.8L512,672.7c0,0,32.4,20.2,34.4,63.8v105c0,0-15.2,118.7-139.8,73.1l-220-148.8l-28.8-60.3 c0,0-30.5-67.4,13.1-101L288.5,523.8z"/>
                </motion.g>
            </motion.g>

            <motion.g ref={logoRef2} style={{ y: y2, rotate: rotate2 }}>
                <motion.g animate={floatAnim(1)} whileHover={{ scale: 1.1, rotate: -5 }}>
                    <path className="st0" d="M691.8,761.1l175.8-118.5c0,0,31.7-20.7,39.9-74.2v-94.5c0,0-1.8-36.1-31.3-62.6l-5.3-5.3l-41.5-29.4 l18.4,38.5c0,0,17.1,40.5-11.6,60.6L622.9,621.1c0,0-15.5,13-15.4,37.5v55C607.5,713.6,622.6,787.7,691.8,761.1z"/>
                    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1={8084.6167} y1={680.7624} x2={8324.9756} y2={680.7624} gradientTransform="matrix(-1 0 0 -1 8937.5752 1082.2146)">
                        <stop offset={0.005586592} style={{stopColor: "#007B5E"}}/>
                        <stop offset={1} style={{stopColor: "#007B5E"}}/>
                    </linearGradient>
                    <path className="st2" d="M767.9,522.3l-134.6-89.8c0,0-19.5-12.1-20.7-38.4v-63.2c0,0,9.1-71.5,84.2-44l132.5,89.7l17.4,36.3 c0,0,18.4,40.6-7.9,60.8L767.9,522.3z"/>
                </motion.g>
            </motion.g>

            <motion.g ref={logoRef3} style={{ y: y3, rotate: rotate3 }}>
                <motion.g animate={floatAnim(2)} whileHover={{ scale: 1.1, rotate: 180 }}>
                    <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1={493.8} y1={557.7} x2={599} y2={557.7} gradientTransform="matrix(1 0 0 -1 0 1080)">
                        <stop offset={0.005586592} style={{stopColor: "#00FFC3"}}/>
                        <stop offset={1} style={{stopColor: "#00FFC3"}}/>
                    </linearGradient>
                    <path className="st3" d="M572,574.9h-51.2c-14.9,0-27-12.1-27-27v-51.2c0-14.9,12.1-27,27-27H572c14.9,0,27,12.1,27,27v51.2 C599,562.9,586.9,574.9,572,574.9z"/>
                </motion.g>
            </motion.g>
        </svg>
    );
}