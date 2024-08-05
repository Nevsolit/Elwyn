import { TeamsEntity } from "~/core/types";
import "./styles.scss";

type ItemTeamProps = {
    data: TeamsEntity;
};

const ItemTeam: React.FC<ItemTeamProps> = (props) => {
    return (
        <div className="item__team__container">
            <div className="item__team__container__image">
                <img src={props?.data?.photoUrl} alt="" />
            </div>
            <div className="item__team__container__content flex-column">
                <h1>
                    {props?.data?.name} ({props?.data?.nickname})
                </h1>
                <p>{props?.data?.jobPosition}</p>
            </div>
        </div>
    );
};

export default ItemTeam;
