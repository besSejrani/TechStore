import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
// import { useSelector } from "react-redux";
// import { IAppState } from "../redux/rootReducer";

const Theme: React.FC<any> = (props) => {
  //   const isDarkTheme = useSelector((state: IAppState) => state.ui.isDarkTheme);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: grey[900],
      },
      secondary: {
        main: "#fff",
      },
      //   type: isDarkTheme ? "dark" : "light",
      type: "light",
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export const withTheme = (Component) => {
  return (props) => {
    return (
      <Theme>
        <Component {...props} />
      </Theme>
    );
  };
};
