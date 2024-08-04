import { Filter } from "lucide-react";
import { HTMLProps, memo } from "react";

type ButtonFilterProps = {
    text: string;
} & HTMLProps<HTMLButtonElement>;

const ButtonFilter: React.FC<ButtonFilterProps> = (props) => {
    return (
        <button className="btn__default gap-2 flex-center" title={props.title} onClick={props.onClick}>
            <Filter size={24} />
            <span>{props.text}</span>
        </button>
    );
};

export default memo(ButtonFilter);
