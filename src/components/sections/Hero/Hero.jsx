import styles from "./Hero.module.scss";
import { Heading } from "../../ui/Heading";
import { primaryColorText } from "../../../styles/styleVariable";

export default function Hero() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.inner_hero}>
        <div className={styles.heading_box}>
          <h1>Hi, I'm Sakura Tanaka</h1>
          <Heading color={primaryColorText}>Frontend Developer</Heading>
        </div>

        <img src="/images/sakura.jpeg" className={styles.my_image} alt="Image of Sakura Tanaka" />

        <p className={styles.text}>
          Sara is an exceptional developer known for her innovative solutions and exceptional coding
          abilities. She creates user-friendly applications and solves complex issues with ease. Her
          drive for excellence makes her a valuable asset to any project and a standout in the
          technology field.
        </p>

        <img src="/icons/arrow.png" className={styles.arrow} />
      </div>
    </section>
  );
}