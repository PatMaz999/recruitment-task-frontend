import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import styles from "../style/SingleChart.module.scss";

ChartJs.register(ArcElement, Tooltip, Legend);

interface SingleChartProps {
  day: string;
}

const SingleChart = ({ day }: SingleChartProps) => {
  return (
    <div className={styles.singleChart}>
      <h2 className={styles.title}>{day}</h2>
      <Pie
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
          datasets: [
            {
              label: "Green Energy",
              data: [300, 50, 100, 200, 400],
              // backgroundColor: ["Red", "Blue", "Yellow", "Cyan", "Black"],
            },
          ],
        }}
      ></Pie>
    </div>
  );
};
export default SingleChart;
