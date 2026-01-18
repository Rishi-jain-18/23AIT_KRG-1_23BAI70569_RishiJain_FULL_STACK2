import logs from "../data/logs";

const Logs = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginTop: "40px",
        flexWrap: "wrap" // responsive
      }}
    >
      {/* HIGH CARBON */}
      <div
        style={{
          backgroundColor: "rgb(229, 206, 206)",
          width: "300px",
          padding: 20,
          borderRadius: 10,
          border: "2px solid red"
        }}
      >
        <h2>High Carbon Emission</h2>
        {logs
          .filter((ele) => ele.carbon >= 4)
          .map((ele) => (
            <h3 key={ele.id} style={{ color: "red" }}>
              {ele.activity} {ele.carbon}
            </h3>
          ))}
      </div>

      {/* LOW CARBON */}
      <div
        style={{
          backgroundColor: "rgb(209, 198, 198)",
          width: "300px",
          padding: 20,
          borderRadius: 10,
          border: "2px solid green"
        }}
      >
        <h2>Low Carbon Emission</h2>
        {logs
          .filter((ele) => ele.carbon < 4)
          .map((ele) => (
            <h3 key={ele.id} style={{ color: "green" }}>
              {ele.activity} {ele.carbon}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default Logs;
