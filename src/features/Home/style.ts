import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    "@keyframes fadeInLeft": {
        from: { opacity: 0, transform: "translateX(-20px)" },
        to: { opacity: 1, transform: "translateX(0)" }
    },
    header: {
        padding: "120px 40px 80px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: 0,
        transform: "translateX(-20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        "@media only screen and (max-width: 1000px)": {
            textAlign: "center",
            flexDirection: "column"
        }
    },
    animate: {
        opacity: 1,
        transform: "translateX(0)",
        animation: "$fadeInLeft 1s ease-out",
    },
    avatar: {
        marginBottom: "50px",
        "& h3": {
            color: "#252E48",
            fontWeight: "300",
            width: "70%",
            fontSize: "35px",
            marginBottom: "10px",
            "@media only screen and (max-width: 550px)": {
                fontSize: "25px"
            },
            "@media only screen and (max-width: 1000px)": {
                width: "100%"
            }
        },
        "& p": {
            color: "#545F7E",
            width: "50%",
            marginBottom: "20px",
            "@media only screen and (max-width: 1000px)": {
                width: "100%"
            }
        },
        "& a": {
            padding: "10px 15px",
            background: "#2E89FF",
            borderRadius: "5px",
            color: "#fff",
            transition: "0.4s", 
            "&:hover": {
                background: "#0062e1"
            }
        }
    },
    photo: {
        "@media only screen and (max-width: 550px)": {
            "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }
        }
    }
});

export default useStyles;