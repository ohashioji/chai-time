import React, { useContext } from 'react';
import { signIn, useSession } from "next-auth/react";
import ResetButton from "../ResetButton/ResetButton";
import styles from './Nav.module.scss';
import ProfileButton from "../ProfileButton/ProfileButton";
export default function Nav() {
    const { data: session, status } = useSession();
    return (
        <header className={styles["nav"]}>
            <h1>Chai Time 🍵</h1>
            <div className={styles["nav__options"]}>
                {!session && <button className={styles["nav__sign-in"]} onClick={() => signIn("github")}>Sign In</button>}
                {session && <ProfileButton />}
                <ResetButton />
            </div>

        </header>
    );
}
