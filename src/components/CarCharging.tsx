import { useState } from "react";
import OptimalChargingBox from "./OptimalChargingBox";
import style from "../style/CarCharging.module.scss";

interface OptimalChargingProps {
  from: string;
  to: string;
  greenPerc: number;
}

const CarCharging = () => {
  const [duration, setDuration] = useState<number | null>(null);
  const [optimalCharging, setOptimalCharging] =
    useState<OptimalChargingProps | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDuration(parseInt(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const hours = formData.get("hours");
    const fetchData = async () => {
      const response = await fetch(
        `https://recruitment-task-backend.onrender.com/energy-mix/optimal-charging?hours=${duration}`
      );
      const data = await response.json();
      setOptimalCharging(data);
    };
    fetchData();
  };

  return (
    <div className={style.container}>
      <h1>Calculate Optimal Car charging hours</h1>
      <form className={style.chargingForm} onSubmit={handleSubmit}>
        <label>Count of hours: </label>
        <div className={style.box}>
          <input
            onChange={handleChange}
            type="number"
            min="1"
            max="6"
            placeholder="1-6"
          />
          <button type="submit">Calculate</button>
        </div>
      </form>
      {optimalCharging && (
        <OptimalChargingBox
          startDate={optimalCharging.from}
          endDate={optimalCharging.to}
          greenPerc={optimalCharging.greenPerc}
        />
      )}
    </div>
  );
};
export default CarCharging;
