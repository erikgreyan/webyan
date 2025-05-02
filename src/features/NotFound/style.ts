import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    notfound: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        opacity: 0,
        transform: "translateY(-50px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        "& img": {
            width: "700px",
            height: "700px",
            "@media only screen and (max-width: 1000px)": {
                width: "100%",
                height: "100%",
            },
        },
        "& a": {
            padding: "10px 15px",
            background: "#2E89FF",
            borderRadius: "5px",
            color: "#fff",
            transition: "0.4s",
            "&:hover": {
                background: "#0062e1",
            },
        },
    },
    fadeIn: {
        opacity: 1,
        transform: "translateY(0)",
    },
});

export default useStyles;