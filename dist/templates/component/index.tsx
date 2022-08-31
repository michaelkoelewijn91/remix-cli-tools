import styles from './style.css';

export const links = () => [
    { rel: "stylesheet", href: styles },
];

export interface ComponentNameInterface {}

const ComponentName = ({ } : ComponentName) => {
    return (
        <div>ComponentName</div>
    )
}

export default ComponentName