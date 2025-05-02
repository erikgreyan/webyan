import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    toaster: {
        padding: "10px"
    },
    header: {
        padding: "150px 20px 20px 20px",
        "& h1": {
            fontSize: "50px",
            textAlign: "center",
            marginBottom: "50px",
            color: "#2E89FF",
            "@media only screen and (max-width: 700px)": {
                "&": {
                    fontSize: "30px",
                }
            }
        },
    },
    items: {
        width: "60%",
        margin: "0 auto",
        "@media only screen and (max-width: 1000px)": {
            width: "95%"
        }
    },
    item: {
        "& h2": {
            fontSize: "30px",
            color: "#2E89FF",
            marginBottom: "20px",
            "@media only screen and (max-width: 700px)": {
                "&": {
                    fontSize: "20px",
                }
            }
        },
        "& p": {
            color: "#545F7E",
            marginBottom: "20px"
        },
        "& a": {
            color: "#2E89FF",
            transition: "0.4s",
            "&:hover": {
                color: "#0062e1",
                textDecoration: "underline"
            }
        }
    }
});

export default useStyles;