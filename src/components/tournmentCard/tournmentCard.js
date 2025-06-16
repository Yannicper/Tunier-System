import styles from "./tournamentCard.module.css";
import Link from "next/link";

export default function TournamentCard({ tournament }) {
  const { name, startTime, status, teams, progress } = tournament;

  return (
<Link href={`/tournament/${tournament.id}`} className={styles.link}>
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{name}</h3>
        <span className={status === "live" ? styles.live : styles.offline}>
          {status}
        </span>
      </div>
      <p><strong>Startzeit: {startTime}</strong></p>
      <p><strong>Teams:</strong> {teams}</p>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        <span className={styles.progressText}>{progress}%</span>
      </div>
    </div>
    </Link>
  );
}