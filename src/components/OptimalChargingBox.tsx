import style from "../style/OptimalChargingBox.module.scss";

interface OptimalChargingProps {
  startDate: string;
  endDate: string;
  greenPerc: number;
}

const OptimalChargingBox = ({
  startDate,
  endDate,
  greenPerc,
}: OptimalChargingProps) => {
  startDate = startDate.replaceAll("T", " ").slice(0, 16);
  endDate = endDate.replaceAll("T", " ").slice(0, 16);
  return (
    <div className={style.container}>
      <h2 className={style.text}>Optimal charging time window</h2>
      <h3 className={style.text}>Start at: {startDate}</h3>
      <h3 className={style.text}>End at: {endDate}</h3>
      <h3 className={style.text}>Green energy percentage: {greenPerc}%</h3>
    </div>
  );
};
export default OptimalChargingBox;
