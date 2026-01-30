import { motion } from "motion/react";
import { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
