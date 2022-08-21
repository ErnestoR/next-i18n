import { useTranslation } from "next-i18next";

import styles from "styles/Home.module.css";

const Grid = () => {
  const { t } = useTranslation("modules", { keyPrefix: "Grid" });

  const links = [
    "https://nextjs.org/docs",
    "https://nextjs.org/learn",
    "https://github.com/vercel/next.js/tree/canary/examples",
    "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  ];

  return (
    <div className={styles.grid}>
      {links.map((href, index) => (
        <a key={href} href={href} className={styles.card}>
          <h2>{t(`links.${index}.title`)} &rarr;</h2>
          <p>{t(`links.${index}.description`)}</p>
        </a>
      ))}
    </div>
  );
};

export default Grid;
