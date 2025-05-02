import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    "@keyframes fadeInUp": {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0)" }
    },
    services: {
        padding: "50px 20px",
        "& h1": {
            color: "#252E48",
            fontSize: "50px",
            marginBottom: "15px",
            textAlign: "center",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            "@media only screen and (max-width: 550px)": {
                fontSize: "30px"
            }
        }
    },
    items: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    item: {
        width: "350px",
        minHeight: "100px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "5px",
        background: "#D1F7EB",
        boxShadow: "0 6px 12px #24CAA94D",
        margin: "10px",
        padding: "0 0 0 10px",
        border: "2px solid #24CAA94D",
        transition: "0.5s",
        "&:hover": {
            transform: "translateY(-10px)",
            borderColor: "#2E89FF"
        },
        "& h4": {
            fontSize: "18px",
            color: "#252E48",
            marginBottom: "20px"
        },
        "& p": {
            fontSize: "16px",
            color: "#545F7E",
        }
    },
    itemHidden: {
        opacity: 0,
        transform: "translateY(20px)",
    },
    animate: {
        opacity: 1,
        transform: "translateY(0)",
        animation: "$fadeInUp 1s ease-out",
    },
    margin: {
        padding: "140px 30px"
    }
});

export default useStyles;