import React, { memo, useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { getDetailCollection } from "~/core/services";
import log from "~/core/utils/log";
import "./styles.scss";

interface NotificationWebEntity {
    id: string;
    title: string;
    description: string;
    banner: string;
    link: string;
    updatedAt: string;
}

const NotificationOnWeb: React.FC = () => {
    const [notification, setNotification] = useState<NotificationWebEntity | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    const fetchNotification = useCallback(async () => {
        try {
            const result = (await getDetailCollection("settings", "notificationWeb")) as NotificationWebEntity;
            if (result && !sessionStorage.getItem(`notification_${result.id}_closed`)) {
                setNotification(result);
            }
        } catch (error) {
            log("error", "Notification not found");
        }
    }, []);

    useEffect(() => {
        fetchNotification();
    }, [fetchNotification]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        if (notification) {
            sessionStorage.setItem(`notification_${notification.id}_closed`, "true");
        }
    }, [notification]);

    if (!notification || !isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="notification-web__container"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                >
                    <button onClick={handleClose} className="notification-web__container__close-btn">
                        <X />
                    </button>
                    <div className="notification-web__container__banner">
                        <img src={notification.banner} alt={notification.title} />
                    </div>
                    <div className="notification-web__container__content">
                        <h2>{notification.title}</h2>
                        <p>{notification.description}</p>
                        <Link
                            to={notification.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="notification-web__container__content__btn"
                        >
                            Xem chi tiết
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default memo(NotificationOnWeb);
