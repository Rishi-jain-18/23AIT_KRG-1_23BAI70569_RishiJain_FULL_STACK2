import logs from "../data/logs";

const Dashboard = () => {
  const sum = logs.reduce((acc, ele) => acc + ele.carbon, 0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px"
      }}
    >
      {/* TOTAL CARBON CARD ONLY */}
      <div
        style={{
          backgroundColor: "#323232ff",
          width: "350px",
          padding: 20,
          borderRadius: 10,
          border: "2px solid blue",
          color: "#fff",
          textAlign: "center"
        }}
      >
        <h1>Total Carbon: {sum}</h1>

        <table
          style={{
            margin: "20px auto",
            borderCollapse: "collapse",
            width: "100%",
            color: "#fff",
            textAlign: "center"
          }}
          border="1"
        >
          <tr>
            <td>Id</td>
            <td>Activity</td>
            <td>Carbon</td>
          </tr>

          {logs.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.activity}</td>
              <td>{element.carbon}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
