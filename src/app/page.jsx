import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/page";

export default function Home() {
  return (
    <div className={styles.container} >
      <div className={styles.part_one}>

        <h1 className={styles.text}>Better Design for your products</h1>

        <p className={styles.paragraph}>Turning your dreams into reality. We bring together the teams from the global tech industry</p>
        {/* <button className={styles.button}></button> */}
        <Button url={"/portfolio"} text={"See our Work"}></Button>

   
      </div>
      <Image
        src="/hero.png"
        alt="Hero png"
        width={500}
        height={500}
        className={styles.img}
      />
    </div>
  );
}
