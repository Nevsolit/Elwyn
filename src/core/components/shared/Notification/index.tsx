import React, { useState, useEffect, memo } from "react";
import "./styles.scss";

interface NotificationProps {
    message: string;
    type?: "success" | "error" | "info";
    duration?: number;
    onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type = "info", duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLeaving(true);
            const leaveTimer = setTimeout(() => {
                setIsVisible(false);
                if (onClose) onClose();
            }, 500); // Thời gian cho animation slide-out
            return () => clearTimeout(leaveTimer);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <div
            className={`notification__container notification--${type} ${isLeaving ? "slide-out-top" : "slide-in-top"}`}
        >
            <div className="notification__container__image">
                <img
                    src="https://i.pinimg.com/564x/3f/28/9b/3f289b17e8a399e3cdefaa10027a088d.jpg"
                    alt="elwaire studio"
                />
            </div>
            <p>{message}</p>
        </div>
    );
};

export default memo(Notification);
