import React from 'react';
import styles from "./MainWrapper.module.scss";
interface MainWrapperProps {
    children: React.ReactNode;
}

export default function MainWrapper({ children }: MainWrapperProps) {
    return (
        <main className={styles["main-wrapper"]} data-testid="main-wrapper">
            {children}
        </main>

    );
}
