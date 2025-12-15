import style from "../style/CarCharging.module.scss";

const CarCharging = () => {
  return (
    <div className={style.container}>
      <h1>Calculate Optimal Car charging hours</h1>
      <form className={style.chargingForm}>
        <label>Count of hours: </label>
        <div>
          <input type="number" min="1" max="6" placeholder="1-6" />
          <button type="submit">Calculate</button>
        </div>
      </form>
    </div>
  );
};
export default CarCharging;
