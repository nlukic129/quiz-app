import background from "../../assets/images/quiz-background.jpg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes["background-image"]}>
        <img src={background} alt="Background quiz image" />
        <h1 className={classes.title}>Welcome to tech quiz!</h1>
        <p className={classes.text}>Test your knowledge in all areas of technology</p>
      </div>
    </>
  );
};

export default Home;
