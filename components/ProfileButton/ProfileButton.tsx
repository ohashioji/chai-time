import React, { useState } from 'react';
import styles from './ProfileButton.module.scss';
import { BsFillPersonFill } from "react-icons/bs";
import { useSession, signOut } from "next-auth/react";
export default function ProfileButton() {
    const { data: session, } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button className={styles["profile"]} onClick={() => setIsOpen(old => !old)}><BsFillPersonFill /></button>
            <div className={styles["profile__dropdown"]} style={{ display: isOpen ? "flex" : "none" }}>
                {session && <p className={styles["profile__user"]}>{session?.user?.name}</p>}
                {session && <button className={styles["profile__sign-out"]} onClick={() => signOut()}>Sign out</button>}
            </div>
        </div>
    );
}
