import SingleChart from "./SingleChart";

import style from "../style/ThreeCharts.module.scss";
import { useEffect, useState } from "react";

interface EnergyMix {
  from: string;
  to: string;
  greenEnergyPerc: EnergySource[];
  otherEnergyPerc: EnergySource[];
  totalGreenPerc: number;
}

interface EnergySource {
  fuel: string;
  perc: number;
}

const ThreeCharts = () => {
  const [energyMix, setEnergyMix] = useState<EnergyMix[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://recruitment-task-backend.onrender.com/energy-mix/current-three-days`
      );
      const data = (await response.json()) as EnergyMix[];
      setEnergyMix(data);
    };
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Energy mix of UK</h1>
      <div className={style.chartContainer}>
        {energyMix && energyMix.length >= 3 && (
          <>
            <SingleChart
              day={"Today"}
              totalGreenPerc={energyMix[0]?.totalGreenPerc}
              greenEnergyPerc={energyMix[0]?.greenEnergyPerc}
              otherEnergyPerc={energyMix[0]?.otherEnergyPerc}
            />
            <SingleChart
              day={"Tomorrow"}
              totalGreenPerc={energyMix[1]?.totalGreenPerc}
              greenEnergyPerc={energyMix[1]?.greenEnergyPerc}
              otherEnergyPerc={energyMix[1]?.otherEnergyPerc}
            />
            <SingleChart
              day={"In two days"}
              totalGreenPerc={energyMix[2]?.totalGreenPerc}
              greenEnergyPerc={energyMix[2]?.greenEnergyPerc}
              otherEnergyPerc={energyMix[2]?.otherEnergyPerc}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default ThreeCharts;
