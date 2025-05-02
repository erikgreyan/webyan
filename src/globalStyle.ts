import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    "@global": {
        "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            textDecoration: "none",
            listStyle: "none",
        },
        "::selection": {
            color: "#0062e1",
            background: "#b1c7ff",
        },

        "::-webkit-scrollbar": {
            width: "12px",
            height: "12px",
        },

        "::-webkit-scrollbar-track": {
            background: "#b1c7ff",
        },

        "::-webkit-scrollbar-thumb": {
            background: "#0062e1",
            borderRadius: "10px",
        },
        "body.hy": {
            fontFamily: "Noto Sans Armenian, sans-serif",
        },
        "body.ru": {
            fontFamily: "Comfortaa, sans-serif",
        },
        "body.en": {
            fontFamily: "Comfortaa, sans-serif",
        }
    }
});

export default useStyles;