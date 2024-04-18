import { Button, Container, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import useStyles from "./styles";
import bgone from "../../../IMG/FrontPage/bg-one.png"; 

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <Container >
                <div className={classes.topSpace}>               
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <div className={classes.nav}>
                            <h1 className={classes.h1Style}> Только про знакомства</h1>
                            <p>Чтобы оставаться ВКонтакте с друзьями и родными, не нужен компьютер. Установите на телефон официальное приложение ВКонтакте и следите за важными событиями из жизни близких, где бы вы ни находились. </p>
                            <Button component={Link} to="/blogpost" variant="contained">Читать блог</Button>
                        </div>
                    </Grid>
                    <Grid xs={7} className={`${classes.backgroundImage} adaptiveImage`}>
                        <img src={bgone} alt="Background" className={`${classes.backgroundImage} adaptiveImage`} />
                    </Grid>
                </Grid>
                </div>
            </Container>
        </>
    );
};
export default Header;