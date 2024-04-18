import useStyles from "./styles";
import { Box } from "@material-ui/core";
import { Container } from "@mui/material";
//import ThemeDark from "./themeDark";
import ResponsiveAppBar from "./navtestt";


const Navbar = () => {
  const classes = useStyles();
  return (
    <Box>
      <ResponsiveAppBar />
      <Container>
        <nav className={classes.nav}>
          <div className="container">
            <div className={classes.navRow}>
                                      
            </div>
          </div>
        </nav>
      </Container>
    </Box>
  );
};

export default Navbar;
