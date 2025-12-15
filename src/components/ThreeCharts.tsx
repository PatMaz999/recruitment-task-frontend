import SingleChart from "./SingleChart";

import styles from "../style/ThreeCharts.module.scss";

const ThreeCharts = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Energy mix of UK</h1>
      <div className={styles.chartContainer}>
        <SingleChart day={"Yesterday"} />
        <SingleChart day={"Today"} />
        <SingleChart day={"Tomorrow"} />
      </div>
    </div>
  );
};
export default ThreeCharts;
