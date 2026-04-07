import styles from './AnimalCard.module.css';

interface AnimalCardProps {
    name: string;
    species: string;
    isDangerous: boolean;
}

export function AnimalCard({ name, species, isDangerous }: AnimalCardProps) {
    return (
    <div className={styles.card}>
        <h2>{name}</h2>
        <p>{species}</p>

        <p className={isDangerous ? styles.danger : styles.safe}>
        {isDangerous
            ? "Status: Alerta Máximo 🐅"
            : "Status: Tranquilo e Amigável 🦦"}
        </p>
    </div>
    );
}