import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { WrapperSection } from "~/core/components";
import "./styles.scss";
import { db } from "~/core/configs/firebase";

interface FormData {
    name: string;
    company: string;
    email: string;
    details: string;
}

const ContactMe: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        company: "",
        email: "",
        details: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            await addDoc(collection(db, "contacts"), formData);
            setSubmitMessage("Thank you for your message. We will get back to you soon!");
            setFormData({ name: "", company: "", email: "", details: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitMessage("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <WrapperSection>
            <div className="contact-me-container">
                <div className="contact-me-container__wrapper">
                    <h1>Hãy liên lạc với chúng tôi!</h1>
                    <p>
                        Để liên hệ kinh doanh, hãy <span>gửi email cho tôi </span>hoặc điền vào biểu mẫu bên dưới.
                    </p>
                    <div>
                        <p>Đối với các câu hỏi liên quan đến Thiết kế UI/UX và/hoặc Khởi nghiệp cá nhân:</p>
                        <p>- Xem các Câu hỏi thường gặp này.</p>
                        <p>- Để tìm hiểu các công cụ hoặc thiết bị tôi sử dụng, hãy truy cập Tài nguyên.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputField
                            label="Tên tôi là"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder=" Tên của bạn"
                        />
                        <InputField
                            label="Công ty của tôi là"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Tên công ty"
                        />
                        <InputField
                            label="Email của tôi là"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email của bạn"
                            type="email"
                        />
                        <div className="group-form">
                            <label htmlFor="details">
                                Thông tin chi tiết hơn về dự án (tóm tắt ngắn gọn, thời hạn, v.v.)
                            </label>
                            <textarea
                                id="details"
                                name="details"
                                value={formData.details}
                                onChange={handleInputChange}
                                placeholder="Nhập thông tin chi tiết"
                            />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="button__default">
                            {isSubmitting ? "Submitting..." : "Gửi thông điệp"}
                        </button>
                    </form>
                    {submitMessage && <p className="submit-message ">{submitMessage}</p>}
                </div>
            </div>
        </WrapperSection>
    );
};

interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, placeholder, type = "text" }) => (
    <div className="group-form">
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
);

export default ContactMe;
