import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    nav: {
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "80px",
        background: "#fff",
        padding: "0 30px",
        boxShadow: "0 0 10px #2E89FF",
        zIndex: 9999,
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        color: "#1f1f1f",
        "& span": {
            fontWeight: "bold"
        }
    },
    ul: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media only screen and (max-width: 820px)": {
            "&": {
                position: "absolute",
                display: "block",
                width: "100%",
                top: "80px",
                background: "#fff",
                textAlign: "center",
                left: "-100%",
                boxShadow: "0 6px 5px #2E89FF",
                padding: "0 0 10px 0",
                transition: "0.4s",
                "&.active": {
                    left: "0",
                },
                "& li:nth-child(4)": {
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    "& ul": {
                        right: "auto",
                        marginTop: "40px",
                    }
                }
            }
        },
        "& li": {
            margin: "10px",
            "& a": {
                color: "#1f1f1f",
                transition: "0.4s",
                "&.active": {
                    color: "#2E89FF",
                },
                "&:hover": {
                    color: "#2E89FF"
                }
            }
        }
    },
    btn: {
        position: "relative",
        width: "50px",
        height: "50px",
        paddingTop: "20px",
        cursor: "pointer",
        display: "none",
        "@media only screen and (max-width: 820px)": {
            "&": {
                display: "block",
            }
        },
        "& span, & span::after, & span::before": {
            content: "''",
            position: "absolute",
            width: "50px",
            height: "2px",
            marginTop: "-2px",
            borderBottom: "2px solid #1f1f1f",
            transition: "0.4s",
        },
        "& span::after": {
            transform: "translateY(-15px)",
        },
        "& span::before": {
            transform: "translateY(15px)",
        },
        "&.active": {
            "& span": {
                width: 0,
                borderColor: "red",
            },
            "& span, & span::after, & span::before": {
                borderColor: "red",
            },
            "& span::after": {
                transform: "rotate(45deg)",
            },
            "& span::before": {
                transform: "rotate(-45deg)",
            },
        }
    },
    lang: {
        "& div": {
            width: "35px",
            height: "35px",
            border: "1px solid #2E89FF",
            borderRadius: "50%",
            cursor: "pointer",
            margin: "0 auto",
            transition: "0.4s",
            "&:hover": {
                boxShadow: "0 0 5px #2E89FF",
            },
            "& img": {
                width: "100%",
                height: "100%",
                borderRadius: "50%"
            },
        },
        "&:hover ul": {
            opacity: 1,
            visibility: "visible"
        },
        "& ul": {
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#fff",
            borderRadius: "5px",
            right: "20px",
            boxShadow: "0 0 5px #2E89FF",
            opacity: 0,
            visibility: "hidden",
            "@media only screen and (max-width: 820px)": {
                right: "40%",
            },
            "& li": {
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                width: "100%",
                padding: "0 0 0 13px",
                cursor: "pointer",
                transition: "0.4s",
                "&:hover": {
                    transform: "translateX(5px)",
                },
                "& img": {
                    width: "25px",
                    height: "25px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "1px solid #2E89FF",
                },
                "& p": {
                    marginLeft: "10px",
                }
            }
        },
    }
});

export default useStyles;