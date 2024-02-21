import {useEffect, useState} from "react"

const hiddenCard = "https://icongr.am/entypo/back.svg?size=128&color=000000"
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
.sort(() => Math.random() - 0.5)

export default function Memotest () {

    const [guessed, setGuessed] = useState([])
    const [selected, setSelected] = useState([])

    useEffect(() => {
        if (selected.length === 2) {
            if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
                setGuessed((guessed) => guessed.concat(selected))
            }
            setTimeout(() => setSelected([]), 1000)
        }
    }, [selected])

    useEffect(() => {
        if (guessed.length === images.length) {
            alert("winsss")
        }
    }, [guessed])

    return (
        <main>
            <h1>Memotest</h1>
        
            <ul className="memo-container">
                {images.map((image) => {
                    const [ , url] = image.split("|")

                    return (
                        <li key={image}
                            onClick={() => selected.length < 2 && setSelected((selected) => selected.concat(image))}
                        >
                            {selected.includes(image) || guessed.includes(image) ? (
                                <img className="icon" alt="icon" src={url}/>
                            ) : (
                                <img className="icon hiddenCard" alt="icon" src={hiddenCard}/>
                            )}
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}