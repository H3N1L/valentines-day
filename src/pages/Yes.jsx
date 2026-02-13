import "../css/Yes.css"
import logo from "../assets/Borat.gif";
import {useEffect} from "react";
import confetti from "canvas-confetti";

function Yes() {
    useEffect(() => {
        const duration = 3000;
        const end = Date.now() + duration;

        const colors = ["#ff0a54", "#ff477e", "#ff85a1", "#ff99ac"];

        const frame = () => {
            confetti({
                particleCount: 6,
                angle: 60,
                spread: 80,
                origin: {x: 0},
                colors,
            });

            confetti({
                particleCount: 6,
                angle: 120,
                spread: 80,
                origin: {x: 1},
                colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
    }, []);
    return (
        <div className="yes-container">
            <div className="yes-image-container">
                <img src={logo} alt="love"/>
            </div>
        </div>
    )
}

export default Yes