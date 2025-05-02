import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    about: {
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        "& h1": {
            color: "#252E48",
            fontSize: "50px",
            marginBottom: "15px",
            textAlign: "center",
            "@media only screen and (max-width: 550px)": {
                fontSize: "30px"
            }
        },
        "& p": {
            color: "#545F7E",
            width: "50%",
            margin: "0 auto",
            lineHeight: "1.5",
            wordSpacing: "1.5px",
            marginBottom: "50px",
            "@media only screen and (max-width: 1020px)": {
                width: "100%"
            }
        }
    },
    animate: {
        opacity: 1,
        transform: "translateY(0)",
    },
    margin: {
        padding: "140px 30px"
    }
});

export default useStyles;