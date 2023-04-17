import Head from "next/head";
import ASNavigation, { ActivePage } from "../organisms/ASNavigation";
import styles from "./ASDefaultLayout.module.css";

interface ASDefaultLayoutProps {
  children: React.ReactNode;
  activePage: ActivePage;
}

export default function ASDefaultLayout({
  children,
  activePage,
}: ASDefaultLayoutProps) {
  const getDate = () => {
    const dateObj = new Date();
    const weekDay = dateObj.toLocaleDateString("en-EN", { weekday: "long" });
    const date = dateObj.getDate();
    const monthLong = dateObj.toLocaleDateString("en-EN", { month: "long" });
    const year = dateObj.getFullYear();
    return `${weekDay} ${date} ${monthLong} ${year}`;
  };

  return (
    <>
      <Head>
        <title>AlcoSleeper</title>
        <meta
          name="description"
          content="Alcohol and Sleeper correlation tracking app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h2>Today</h2>
          <p>{getDate()}</p>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <ASNavigation activePage={activePage} />
      </footer>
    </>
  );
}
