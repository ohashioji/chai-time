//@ts-nocheck
import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';


interface PortalProps {
    children: React.ReactNode;
    selector: string;
}


export default function Portal({ children, selector }: PortalProps) {
    const ref = useRef();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector(selector);
        setMounted(true);
    }, [selector]);

    return mounted ? createPortal(children, ref.current) : null;
}