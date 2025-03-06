const generateThemeOptions = (appTheme) => {
  const mode = appTheme?.mode || "light";
  const primaryColor = "#1058DF";
  const secondaryColor = "#ED502E";

  return {
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
    palette: {
      mode,
      theadbg: {
        main: "#EDF3FF",
      },
      activeBlue: {
        main: "#3574F0",
      },
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
    typography: {
      overflow: "hidden",
      fontFamily: ["Lexend"],
      body1: {
        noWrap: true,
        fontWeight: 400,
        textOverflow: "ellipsis",
      },
      body2: {
        noWrap: true,
        fontWeight: 400,
        textOverflow: "ellipsis",
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            overflow: "hidden",
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableFocusRipple: true,
          disableTouchRipple: true,
        },
      },
      MuiMenuItem: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            minHeight: 0,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          size: "small",
          disableRipple: true,
          variant: "contained",
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            "&.MuiTypography-root": {
              fontWeight: 500,
              fontSize: "14px",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            minHeight: 0,
            "& .MuiTabs-fixed  .MuiTabs-indicator": {
              width: "0px !important",
            },
            "& .MuiButtonBase-root": {
              color: "#fff",
              border: "none",
            },
            "& .MuiButtonBase-root.Mui-selected": {
              color: "#fff",
              border: "none",
            },
          },
        },
      },
      MuiTab: {
        defaultProps: {
          disableFocusRipple: true,
          disableTouchRipple: true,
        },
        styleOverrides: {
          root: {
            height: "auto",
            borderWidth: 0,
            fontWeight: 500,
            fontSize: "14px",
            minHeight: "auto",
            padding: "10px 20px",
            textTransform: "capitalize",
            backgroundColor: primaryColor,
            "&.Mui-selected": {
              backgroundColor: secondaryColor,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            border: "none",
            outline: "none",
            "& .MuiInputBase-root:placeholder": {
              fontSize: "14px",
            },
            "& .MuiInputBase-root:focus": {
              border: 0,
              outline: "none",
            },
            "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
              border: `1px solid #00000010`,
            },
            "& .MuiInputBase-root:focusVisible": {
              outline: "none",
              border: `1px solid ${primaryColor}`,
            },
            "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: `1px solid ${primaryColor}`,
              },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#dadada",

            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#dadada",
            },

            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
              backgroundColor: "#dadada",
            },

            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,

              backgroundColor: "#A7A7A7",

              border: "3px solid #A7A7A7",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            border: "none",
            outline: "none",
            "& .MuiInputBase-root": {
              fontSize: "14px",
            },
            "& .MuiInputBase-root.Mui-disabled": {
              border: "none",
            },
            "& .MuiInputBase-root::placeholder": {
              fontSize: "14px",
            },
            "& .MuiInputBase-root:focus": {
              border: 0,
              outline: "none",
            },
            "& .Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-root:focus-visible": {
              border: 0,
              outline: "none",
            },
            "& .MuiInputBase-root.Mui-disabled .MuiInputAdornment-root": {
              color: "#00000010",
            },
            "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
              border: `1px solid #ccc`,
            },
            "& .MuiInputBase-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
              {
                border: "1px solid #ccc",
              },
            "& .MuiInputBase-root.Mui-disabled:hover .MuiOutlinedInput-notchedOutline":
              {
                border: "1px solid #ccc",
              },
          },
        },
      },
    },
  };
};

export default generateThemeOptions;
