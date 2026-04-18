import { Header } from "../../components/header/Header";
import { Tag } from "../../components/tag/Tag";
import "./index.css"
export function Home() {
    return (
        <div className="home">
            <Header />
            <div className="main">
                <img className="userPhoto" src='https://thispersondoesnotexist.com/' />
                <div className="aboutText">
                    <h1>Daniel Carter</h1>
                    <p>
                        Daniel is a curious software developer who enjoys
                        building clean and scalable web applications. He spends
                        most of his time working with modern JavaScript tools,
                        improving UI performance, and learning better coding
                        patterns to write maintainable code.
                    </p>
                    <div className="tags">
                        <Tag text='JavaScript' />
                        <Tag text='React' />
                        <Tag text='TypeScript' />
                        <Tag text='Node.js' />
                        <Tag text='REST APIs' />
                        <Tag text='Git' />
                        <Tag text='HTML' />
                        <Tag text='CSS' />
                        <Tag text='Algorithms' />
                    </div>
                </div>
            </div>
        </div>
    )
}
