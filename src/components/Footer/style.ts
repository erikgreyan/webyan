import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#fff",
        boxShadow: "0 0 10px #2E89FF",
        padding: "15px 30px",
        width: "100%",
    },
    info: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "20px",
        flexWrap: "wrap",
        "& div": {
            color: "#252E48",
            margin: "10px",
            "& h4": {
                color: "#252E48",
                marginBottom: "10px",
                "@media only screen and (max-width: 820px)": {
                    "&": {
                        textAlign: "center"
                    }
                }
            },
            "& ul": {
                "@media only screen and (max-width: 490px)": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                },
                "& li": {
                    "& a": {
                        display: "flex",
                        alignItems: "center",
                        color: "#545F7E",
                        marginBottom: "10px",
                        transition: "0.4s",
                        "&:hover": {
                            color: "#2E89FF"
                        },
                        "&.active": {
                            color: "#2E89FF"
                        },
                        "& svg": {
                            marginRight: "5px",
                            width: "25px"
                        }
                    }
                }
            }
        },
        "& div:nth-child(1)": {
            width: "25%",
            "& p": {
                fontSize: "30px",
                marginLeft: "10px"
            },
            "@media only screen and (max-width: 820px)": {
                "&": {
                    textAlign: "center",
                    width: "100%"
                }
            }
        }
    },
    disabled: {
        pointerEvents: "none"
    },
    copyright: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        "& div": {
            textAlign: "center",
            margin: "10px auto",
            "& a": {
                color: "#252E48",
                margin: "10px",
                fontFamily: "Comfortaa, sans-serif",
                transition: "0.4s",
                "&:hover": {
                    color: "#2E89FF"
                }
            }
        }
    }
});

export default useStyles;