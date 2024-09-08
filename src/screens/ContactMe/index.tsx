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
                    <h1>Let's get in touch!</h1>
                    <p>
                        For business enquiries, <span>email me </span>or complete the form below.
                    </p>
                    <div>
                        <p>For questions regarding UI/UX Design and/or Solopreneurship:</p>
                        <p>- Check out these Frequently Asked Questions.</p>
                        <p>- To find out what tools or gears I use, go to Resources.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputField
                            label="My name is"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                        />
                        <InputField
                            label="I work at"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company"
                        />
                        <InputField
                            label="My email is"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your email"
                            type="email"
                        />
                        <div className="group-form">
                            <label htmlFor="details">
                                More details about the project (brief summary, deadline etc)
                            </label>
                            <textarea
                                id="details"
                                name="details"
                                value={formData.details}
                                onChange={handleInputChange}
                                placeholder="Your message"
                            />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Get in touch"}
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
