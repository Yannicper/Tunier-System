import DashboardNavBar from
"../../components/dashboardNavBar";
import styles from "./dashboard.module.css";
import TournamentCard from "@/components/tournmentCard/tournmentCard";

const Dashboard = () => {

const turniere = [
  {
    id: 1,
    name: "Beach Masters Köln",
    startTime: "2025-06-15 10:00:00",
    status: "live",
    teams: 12,
    progress: 45,
  },
  {
    id: 2,
    name: "Stadtmeisterschaft Düsseldorf",
    startTime: "2025-06-18 14:30:00",
    status: "nicht live",
    teams: 8,
    progress: 0,
  },
  {
    id: 3,
    name: "Sommercup Hamburg",
    startTime: "2025-06-20 09:00:00",
    status: "nicht live",
    teams: 16,
    progress: 100,
  }
];




  return (
    <><DashboardNavBar />
    <div className={styles.dashboardBox}>
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardInformationBox}>
          <h2>Willkommen zurück, Max Mustermann!</h2>
          <p>Hier findest du deine aktuellen Turniere und Statistiken.</p>
          </div>
      </div>
      <div className={styles.myActiveTournaments}>
        {turniere.map((turnier) => (
          <TournamentCard key={turnier.id} tournament={turnier} />
        ))}
      </div>
    </div></>
  );
};

export default Dashboard;
