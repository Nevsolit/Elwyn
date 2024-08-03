import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "lucide-react"; // Giả sử bạn đang sử dụng lucide-react cho icons

interface DropdownCustomOption {
    value: string;
    label: string;
}

interface DropdownCustomProps {
    options: DropdownCustomOption[];
    defaultValue?: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const DropdownCustom: React.FC<DropdownCustomProps> = ({ options, defaultValue, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<DropdownCustomOption | null>(
        options.find((option) => option.value === defaultValue) || null,
    );
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option: DropdownCustomOption) => {
        setSelectedOption(option);
        onChange(option.value);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedOption ? selectedOption.label : placeholder || "Select an option"}</span>
                <ChevronDownIcon className={`dropdown-icon ${isOpen ? "open" : ""}`} />
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className={selectedOption?.value === option.value ? "selected" : ""}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownCustom;
