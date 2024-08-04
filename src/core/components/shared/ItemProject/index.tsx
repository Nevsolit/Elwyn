import { Link } from "react-router-dom";
import "./styles.scss";
import PATHS from "~/core/constants/path";
import { ProjectsEntity } from "~/core/types/Entity/Projects";
import { formatTime } from "~/core/utils";

interface ItemProjectProps {
    data: ProjectsEntity;
}

const ItemProject: React.FC<ItemProjectProps> = (props) => {
    const images =
        props.data.sections[0].images.length > 0
            ? props.data.sections[0].images[0].url
            : "https://i.pinimg.com/736x/3d/89/12/3d8912781b539883a0b18274238df8e2.jpg";

    return (
        <Link to={`/${PATHS.PROJECT}/${props.data.id}`} className="item__project__container">
            <div className="item__project__container__image">
                <img src={images} alt={props.data.title} />
            </div>
            <div className="item__project__container__content flex-column">
                <h1>{props.data.title}</h1>
                <p>{formatTime(props.data.timeCreated)}</p>
            </div>
        </Link>
    );
};

export default ItemProject;
