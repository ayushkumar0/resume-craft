import React from "react";
import styles from "./Body.module.css";
function Body() {
  const colors = {"239ce2","#48bb78","#0bc5ea","#a0aec0","#ed8936"};
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Rsume Craft</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          <span className={styles.color} />
          <span className={styles.color} />
          <span className={styles.color} />
          <span className={styles.color} />
          <span className={styles.color} />
        </div>
        <button>Download</button>
      </div>
    </div>
  );
}

export default Body;
