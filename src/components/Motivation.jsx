import { useState } from 'preact/hooks';
import '../styles/global.css';

export default function Greeting({messages}) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
        <h3>{greeting}!</h3>
        <button onClick={() => setGreeting(randomMessage())}>
            Motivation!
        </button>
        </div>
    );
}