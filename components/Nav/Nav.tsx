import React from 'react';
import ResetButton from "../ResetButton/ResetButton";
import styles from './Nav.module.scss';

export default function Nav() {
  
  
    return (
        <header className={styles["nav"]}>
            <h1>Chai Time 🍵</h1>
            <div className={styles["nav__options"]}>
                {/* {!session && <button className={styles["nav__sign-in"]} onClick={() => signIn("github")}>Sign In</button>}
                {session && <ProfileButton />} */}
                <ResetButton />
            </div>

        </header>
    );
}
