import React, { ComponentProps } from "react";
import { motion } from "framer-motion";

interface ViewProps extends ComponentProps<typeof motion.div> {
    // You can add custom props here if needed
}

const View: React.FC<ViewProps> = ({ children, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default View;
