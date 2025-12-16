import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import style from "../style/SingleChart.module.scss";

ChartJs.register(ArcElement, Tooltip, Legend);

interface SingleChartProps {
  day: string;
  totalGreenPerc: number;
  greenEnergyPerc: EnergySource[];
  otherEnergyPerc: EnergySource[];
}

interface EnergySource {
  fuel: string;
  perc: number;
}

const SingleChart = ({
  day,
  totalGreenPerc,
  greenEnergyPerc,
  otherEnergyPerc,
}: SingleChartProps) => {
  greenEnergyPerc = greenEnergyPerc.filter((source) => source.perc > 0);
  otherEnergyPerc = otherEnergyPerc.filter((source) => source.perc > 0);

  const greenColors = [
    "#4CAF50",
    "#2E8B57",
    "#8BC34A",
    "#006400",
    "#66BB6A",
    "#1B5E20",
  ];
  const otherColors = [
    "#424242",
    "#8D6E63",
    "#757575",
    "#212121",
    "#A9A9A9",
    "#5D4037",
  ];

  const colors = greenColors
    .slice(0, greenEnergyPerc.length)
    .concat(otherColors);

  const labels = greenEnergyPerc
    .concat(otherEnergyPerc)
    .map((source) => source.fuel);
  const values = greenEnergyPerc
    .concat(otherEnergyPerc)
    .map((source) => source.perc);

  return (
    <div className={style.singleChart}>
      <h2>{day}</h2>
      <h4>Green energy: {totalGreenPerc} %</h4>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              label: "Green Energy",
              data: values,
              backgroundColor: colors,
            },
          ],
        }}
      ></Pie>
    </div>
  );
};
export default SingleChart;
