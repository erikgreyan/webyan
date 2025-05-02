import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    scroll: {
        position: "fixed",
        bottom: "30px",
        width: "50px",
        height: "50px",
        background: "#fff",
        borderRadius: "50%",
        border: "1px solid #2E89FF",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: "20px",
        transition: "opacity 0.4s, transform 0.4s",
        opacity: 0,
        transform: "translateY(100px)",
        "&:hover": {
            background: "#2E89FF",
            boxShadow: "0 0 5px #2E89FF",
            transform: "translateY(-5px)",
        },
        "&:hover svg": {
            color: "#fff",
        },
        "& svg": {
            width: "25px",
            height: "25px",
            color: "#2E89FF",
            transition: "0.4s",
        },
    },
    visible: {
        opacity: 1,
        transform: "translateY(0)",
    },
    hidden: {
        opacity: 0,
        transform: "translateY(100px)",
    },
});

export default useStyles;