import SingleChart from "./SingleChart";

import style from "../style/ThreeCharts.module.scss";

const ThreeCharts = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Energy mix of UK</h1>
      <div className={style.chartContainer}>
        <SingleChart day={"Yesterday"} />
        <SingleChart day={"Today"} />
        <SingleChart day={"Tomorrow"} />
      </div>
    </div>
  );
};
export default ThreeCharts;
