import { Link } from "react-router-dom";
import "./styles.scss";
import PATHS from "~/core/constants/path";

const ItemBlogs: React.FC = () => {
    return (
        <Link to={`/${PATHS.BLOG}/123`} className="item__blogs__container">
            <div className="item__blogs__container__image"></div>
            <div className="item__blogs__container__content flex-column">
                <h1>Celamniua</h1>
                <p>Here's a deeper dive into the different categories of work that I create.</p>
            </div>
        </Link>
    );
};

export default ItemBlogs;
