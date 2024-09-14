import React from "react";
import styles from "./index.module.scss";

interface CardType {
  icon: React.ReactNode;
  title: string;
  value: string;
}

interface Props {
  data: CardType;
}
const UserInformationCards: React.FC<Props> = ({ data }) => {  
  return (
    <div className={styles.container}>
      {data.icon}
      <p className={styles.title}>{data.title}</p>
      <p className={styles.value}>{data.value}</p>
    </div>
  );
};

export default UserInformationCards;
