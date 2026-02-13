import "../css/Home.css"
import logo from "../assets/cats.gif"
import {useNavigate} from "react-router-dom";
import { useState } from "react";

function Home() {
    const navigate = useNavigate();
    const [size, setSize] = useState({ width: 120, height: 50 });
c

    const noMessages =[
        "Try again for Real this time",
        "Do you really mean that",
        "What are you trying to Prove",
        "We all know what you actually want to click ",
        "No 😢",
        "Are you sure?",
        "Really sure??",
        "Think again 😈",
        "That’s kinda rude...",
        "Wow. Just wow.",
        "My heart can't take this 💔",
        "You didn’t mean that.",
        "Try again 😏",
        "Bold of you to press that."
    ]

    const handlClick = () => {
        navigate('/Yes')

    }

    const noClick = () => {
        const randomText = Math.floor(Math.random() * noMessages.length)
        alert(noMessages[randomText])
    }

    const handleClick = () => {
    const random = Math.floor(Math.random() * noMessages.length);
        alert(noMessages.at(random)); // alert on click

        // Shrink button by 10% each click
        setSize((prev) => ({
            width: prev.width * 0.9,
            height: prev.height * 0.9,
        }));


    };

    return (
        <div className="container">
            <div className="image-container">
                <img src={logo} alt="love"/>
            </div>
            <div className="message">
                <h3>Will You be my Valentine ? ❤️</h3>
            </div>
            <div className="button-container">
                <button className="favourite-btn" onClick={handlClick} style={{
                    width: "120px",
                    height: "50px"
                }}>
                    Yes
                </button>
                {/*<button className="favourite-btn-no" onClick={noClick}>*/}
                {/*    No*/}
                {/*</button>*/}
                <button
                    onClick={handleClick}
                    style={{
                        width: `${size.width}px`,
                        height: `${size.height}px`,
                        fontSize: `${size.height / 3}px`, // adjust font size
                        transition: "all 0.2s ease", // smooth shrinking
                    }}>
                    No
                </button>
            </div>
        </div>
    )
}
export default Home