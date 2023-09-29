import React from "react";

import styles from "./styles.module.scss";

export default function Layout({children}: { children: React.ReactNode }) {
    return <div className={"mb-10"}>
        <main className={styles.main}>
            {children}
        </main>
    </div>;
}
