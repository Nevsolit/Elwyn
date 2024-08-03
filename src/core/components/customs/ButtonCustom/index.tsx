import { Button } from "@radix-ui/themes";

type ButtonProps = {
    children: React.ReactNode;
};

const ButtonCustom: React.FC<ButtonProps> = ({ children }) => {
    return (
        <Button color="indigo" variant="soft">
            {children}
        </Button>
    );
};

export default ButtonCustom;
