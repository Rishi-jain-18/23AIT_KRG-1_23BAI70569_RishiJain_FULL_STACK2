import { useDispatch, useSelector } from 'react-redux';
import { fetchLogs } from '../store/logsSlice';

const Logs = () => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.logs);

    const handleFetchLogs = () => {
        dispatch(fetchLogs());
    };

    if (status === "loading") {
        return <p className="muted">Loading your logs…</p>;
    }

    if (status === "failed") {
        return <p className="error">Error: {error}</p>;
    }

    const logs = data || [];

    return (
        <div className="logs-page">
            <div className="controls">
                <button
                    onClick={handleFetchLogs}
                    className="btn primary"
                    disabled={status === "loading"}
                >
                    Fetch Logs
                </button>
            </div>

            <div className="logs-grid">
                <div className="log-panel card">
                    <h3>High Carbon Emission</h3>
                    {logs
                        .filter(ele => ele.carbon >= 4)
                        .map((ele) => (
                            <div key={ele.id} className="log-item high">
                                <span>{ele.activity}</span>
                                <strong>{ele.carbon} kg</strong>
                            </div>
                        ))}
                </div>

                <div className="log-panel card">
                    <h3>Low Carbon Emission</h3>
                    {logs
                        .filter(ele => ele.carbon < 4)
                        .map((ele) => (
                            <div key={ele.id} className="log-item low">
                                <span>{ele.activity}</span>
                                <strong>{ele.carbon} kg</strong>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Logs;
