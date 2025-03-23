import React, { memo } from "react";
import "./styles.scss";
import Images from "~/assets/imgs";

const Account: React.FC = () => {
    return (
        <div className="account__container">
            <img src={Images.account} alt="Vo Ngoc Min" />
            <p>Võ Ngọc Min</p>
        </div>
    );
};

export default memo(Account);
