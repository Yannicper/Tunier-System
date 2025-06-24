import Link from 'next/link';
export default function DashboardNavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
      </div>
      <div style={styles.right}>
        <Link href="/createTournement">
          <button style={styles.button}>Aktion</button>
        </Link>
        <div style={styles.userProfile}>
          <div style={styles.userImageWrapper}>
          </div>
          <span style={styles.userName}>Max Mustermann</span>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    height: "60px",
    backgroundColor: "#222",
    color: "#fff",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  button: {
    padding: "8px 16px",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#0070f3",
    color: "#fff",
  },
  userProfile: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  userImageWrapper: {
    borderRadius: "50%",
    overflow: "hidden",
    width: 32,
    height: 32,
  },
  userName: {
    fontSize: "14px",
  },
};
