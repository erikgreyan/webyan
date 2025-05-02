import useStyles from "./globalStyle";
import ResponsiveRouter from "./router/router";

const App = () => {
    useStyles();
    return <ResponsiveRouter />;
}

export default App;