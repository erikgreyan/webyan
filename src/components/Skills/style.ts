import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    skills: {
        padding: "50px 20px",
        "& h1": {
            color: "#252E48",
            fontSize: "50px",
            marginBottom: "15px",
            textAlign: "center",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            "@media only screen and (max-width: 550px)": {
                fontSize: "30px",
            },
        }
    },
    items: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "@media only screen and (max-width: 1350px)": {
            flexDirection: "column",
        },
    },
    txt: {
        width: "50%",
        opacity: 0,
        transform: "translateY(50px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        "@media only screen and (max-width: 1350px)": {
            width: "100%",
            textAlign: "center",
            marginBottom: "50px",
        },
        "& h2": {
            color: "#252E48",
            fontSize: "55px",
            marginBottom: "10px",
            "@media only screen and (max-width: 850px)": {
                "&": {
                    fontSize: "30px !important",
                },
            },
        },
        "& p": {
            color: "#545F7E",
            lineHeight: 1.5,
            wordSpacing: "1.5px",
            marginBottom: "30px",
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
    item: {
        width: "150px",
        height: "150px",
        opacity: 0,
        background: "#D1F7EB",
        boxShadow: "0 6px 12px #24CAA94D",
        border: "2px solid #24CAA94D",
        transform: "translateY(50px)",
        borderRadius: "5px",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.4s, opacity 0.6s ease-out, transform 0.6s ease-out",
        "&:hover": {
            borderColor: "#2E89FF",
            transform: "translateY(-10px)",
        },
        "& img": {
            width: "55px",
            height: "55px",
            objectFit: "cover",
            marginBottom: "20px",
        },
        "& p": {
            color: "#252E48",
            fontSize: "20px",
            fontFamily: "Comfortaa, sans-serif",
        },
    },
    row: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
        flexWrap: "wrap",
    },
    fadeIn: {
        opacity: 1,
        transform: "translateY(0)",
    },
    slideUp: {
        opacity: 1,
        transform: "translateY(0)",
    },
    margin: {
        padding: "140px 30px"
    }
});

export default useStyles;