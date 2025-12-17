import style from "../style/Loading.module.scss";

interface LoadingProps {
  text: string;
}

export const Loading: React.FC<LoadingProps> = ({ text = "Loading" }) => {
  return <div className={style.simpleLoader}>{text}</div>;
};
export default Loading;
