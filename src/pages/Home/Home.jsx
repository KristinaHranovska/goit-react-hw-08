import TitleDocument from "../../components/TitleDocument";
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
      <TitleDocument>Phonebook</TitleDocument>
      <section className={style.container}>
        <div className={style.bgImg}>
          <h1>Y personal Phonebook</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
