import { Footer } from "../../components/footer/Footer";
import {
    faCode,
    faCodeBranch,
    faCubes,
    faFileCode,
    faPlug,
    faServer
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../components/header/Header";
import { ListTile } from "../../components/list-tile/ListTile";
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
                        <Tag
                            text='JavaScript'
                            description='JavaScript is a versatile language used to build dynamic and interactive web applications in the browser and beyond.'
                        />
                        <Tag
                            text='React'
                            description='React is a component-based library for building fast, reusable, and maintainable user interfaces.'
                        />
                        <Tag
                            text='TypeScript'
                            description='TypeScript adds static typing to JavaScript, helping developers catch errors early and write safer code.'
                        />
                        <Tag
                            text='Node.js'
                            description='Node.js lets you run JavaScript on the server, making it ideal for scalable backend services and APIs.'
                        />
                        <Tag
                            text='REST APIs'
                            description='REST APIs define a standard way for applications to communicate over HTTP using resources and clear endpoints.'
                        />
                        <Tag
                            text='Git'
                            description='Git is a version control system that tracks code changes, supports collaboration, and makes project history easy to manage.'
                        />
                        <Tag
                            text='HTML'
                            description='HTML provides the structure of web pages by organizing content such as headings, text, images, and links.'
                        />
                        <Tag
                            text='CSS'
                            description='CSS controls the presentation of web pages, including layout, spacing, colors, and responsive design.'
                        />
                        <Tag
                            text='Algorithms'
                            description='Algorithms are step-by-step problem-solving methods that improve performance, efficiency, and code quality.'
                        />
                    </div>
                </div>
            </div>
            <div className="techContent">
                <div className="tilesGrid">
                    <ListTile
                        title="JavaScript"
                        content="A flexible programming language used to create dynamic user interfaces, interactive browser features, and reusable logic that works across modern web applications with strong community support and a rich ecosystem."
                        icon={faCode}
                    />
                    <ListTile
                        title="React"
                        content="A component-driven UI library that helps developers build scalable interfaces by splitting screens into reusable parts, managing state efficiently, and creating predictable rendering behavior for complex frontend projects."
                        icon={faCubes}
                    />
                    <ListTile
                        title="TypeScript"
                        content="A typed superset of JavaScript that improves code reliability through static type checking, stronger editor tooling, and safer refactoring workflows, making large codebases easier to maintain over time."
                        icon={faFileCode}
                    />
                    <ListTile
                        title="Node.js"
                        content="A runtime environment that allows JavaScript to run outside the browser, enabling fast backend development, API creation, and real-time services with efficient non-blocking I/O and broad package support."
                        icon={faServer}
                    />
                    <ListTile
                        title="REST APIs"
                        content="A standardized architectural approach for communication between client and server using clear endpoints, HTTP methods, and structured payloads, helping teams build maintainable integrations and consistent data flows."
                        icon={faPlug}
                    />
                    <ListTile
                        title="Git"
                        content="A distributed version control system used to track source code changes, manage branching strategies, review updates collaboratively, and maintain a reliable development history across individual and team workflows."
                        icon={faCodeBranch}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}
