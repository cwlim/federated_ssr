import { lazy } from "solid-js";
import MFE from 'http://localhost:3000/bundle.js?url';

export const SolidComponent = () => {
    // const MFE = lazy( () => import('http://localhost:3000/bundle.js'));
    return (
        <>
            <p>Solid Component</p>
            <p>MFE should be shown: </p>
            <MFE></MFE>
        </>
    )
}