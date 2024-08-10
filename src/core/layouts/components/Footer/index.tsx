import { Facebook, Instagram } from "lucide-react";
import Images from "~/assets/imgs";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PATHS from "~/core/constants/path";
import { memo, useCallback, useState } from "react";
import log from "~/core/utils/log";
import { addDocument } from "~/core/services";
import { Notification } from "~/core/components";

const Footer: React.FC = () => {
    const { t } = useTranslation("global");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

    const handleSubscribe = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!email) return;

            setLoading(true);
            try {
                await addDocument("subscribers", {
                    email,
                    createdAt: new Date().toISOString(),
                });
                setNotification({ message: `${t("notificaions.success-subscribe")}`, type: "success" });

                // Reset form
                setEmail("");
            } catch (error) {
                log(error);
            } finally {
                setLoading(false);
            }
        },
        [email],
    );

    return (
        <footer className="footer__container">
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
            <div className="footer__container__wrapper">
                <ContactInfo t={t} />
                <NewsletterForm email={email} setEmail={setEmail} t={t} onSubmit={handleSubscribe} loading={loading} />
            </div>
        </footer>
    );
};

const ContactInfo: React.FC<{ t: (key: string) => string }> = ({ t }) => (
    <div className="wrapper__info group__column">
        <h1>{t("footer.get-in-touch")}</h1>
        <p>{t("footer.description")}</p>
        <a href="mailto:Elwyn@gmail.com">Elwyn@gmail.com</a>
        <SocialLinks />
    </div>
);

const SocialLinks: React.FC = () => (
    <div className="group__row">
        <a href="https://www.instagram.com/ktys4tt/" target="_blank" rel="noopener noreferrer">
            <Instagram />
        </a>
        <a href="https://www.facebook.com/kien.mon.33" target="_blank" rel="noopener noreferrer">
            <Facebook />
        </a>
    </div>
);

interface NewsletterFormProps {
    t: (key: string) => string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    email: string;
    setEmail: (email: string) => void;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ t, onSubmit, loading, email, setEmail }) => (
    <div className="wrapper__form group__center">
        <form className="group__column items-center" onSubmit={onSubmit}>
            <div className="wrapper__form__image">
                <img src={Images.avatarFooter} alt="Elwyn" />
            </div>
            <div className="group__column__center">
                <h1>{t("footer.Elwyn-Studio-Newsletter")}</h1>
                <p>{t("footer.contact")}</p>
            </div>
            <div className="wrapper__form__input">
                <input
                    type="email"
                    placeholder="Type your email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn__default" disabled={loading} type="submit">
                    {t("footer.subscribe")}
                </button>
            </div>
            <SubscriptionTerms t={t} />
        </form>
    </div>
);

const SubscriptionTerms: React.FC<{ t: (key: string) => string }> = ({ t }) => (
    <p className="wrapper__form__subscribing">
        {t("footer.subscribing")} <Link to={PATHS.TERMS_OF_USE}>{t("footer.terms-of-use")}</Link>, {t("footer.our")}{" "}
        <Link to={PATHS.PRIVACY_POLICY}>{t("footer.privacy-policy")}</Link> {t("footer.and")}{" "}
        <Link to={PATHS.INFORMATION_COLLECTION_NOTICE}>{t("footer.information-collection-notice")}</Link>
    </p>
);

export default memo(Footer);
