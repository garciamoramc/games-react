import { useEffect, useState } from "react";

const hiddenCard = "https://icongr.am/entypo/back.svg?size=128&color=000000";
const images = [
    "https://icongr.am/devicon/android-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/vuejs-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/ionic-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/apple-original.svg?size=128&color=d6d6d6",
    "https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor",
]
    .flatMap((image) => [`a|${image}`, `b|${image}`])
    .sort(() => Math.random() - 0.5);

export default function Memotest() {
    const [guessed, setGuessed] = useState([]);
    const [selected, setSelected] = useState([]);
    const [showInstructions, setShowInstructions] = useState(false);

    useEffect(() => {
        if (selected.length === 2) {
            if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
                setGuessed((guessed) => guessed.concat(selected));
            }
            setTimeout(() => setSelected([]), 500);
        }
    }, [selected]);

    useEffect(() => {
        if (guessed.length === images.length) {
            alert("winsss");
        }
    }, [guessed]);

    const handleCardClick = (image) => {
        if (selected.length < 2) {
            setSelected((selected) => selected.concat(image));
        }
    };

    const handlePlayAgain = () => {
        setGuessed([]);
        setSelected([]);
    };

    return (
        <main>
            <div>
                <h1 className="component-title">Memotest</h1>
                <button onClick={() => setShowInstructions(!showInstructions)}>
                    Instructions
                </button>
                <button onClick={handlePlayAgain}>Play again</button>
            </div>
            {showInstructions && (
                <ul className="component-description">
                    <li>Click on a card to reveal it</li>
                    <li>Match two identical cards to remove them</li>
                    <li>Match all pairs to win</li>
                </ul>
            )}
            <div>
                <ul className="memo-container">
                    {images.map((image) => {
                        const [, url] = image.split("|");

                        return (
                            <li
                                key={image}
                                onClick={() => handleCardClick(image)}
                                className={`card ${
                                    selected.includes(image) || guessed.includes(image)
                                        ? "flipped"
                                        : ""
                                }`}
                            >
                                {selected.includes(image) || guessed.includes(image) ? (
                                    <img className="icon" alt="icon" src={url} />
                                ) : (
                                    <img className="icon hiddenCard" alt="icon" src={hiddenCard} />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}
