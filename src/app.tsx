import styles from "./app.module.css";
import { MainLayout } from "./components/layout/main-layout/main-layout";

export const App = () => {
  return (
    <div className={styles.root}>
      <MainLayout />
    </div>
  );
};
