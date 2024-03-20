import TitleDocument from "../../components/TitleDocument";
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
      <TitleDocument>Phonebook</TitleDocument>
      <section className={style.bgImg}>
        <div className={style.container}>
          <h1 className={style.mainTitle}>
            My Phone Book: Manage your contacts
          </h1>

          <div className={style.phone}></div>
        </div>
      </section>
    </>
  );
};

export default Home;
