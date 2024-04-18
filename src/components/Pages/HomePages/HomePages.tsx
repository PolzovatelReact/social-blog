import { Container, Box, Grid } from "@material-ui/core";
import { PersonList } from "../../PersonList";
import Header from "./Header/Header";
import OnlyTrevel from "./OnlyTrevel";


const HomePages: React.FC = () => {

    const eventList = [
        {
            first: 'Куда поехать',
            last: 'Где познакомится',
        },
        {
            first: 'Test',
            last: 'Test',
        }
    ]

    return (
        <Container>
            <Header />
            <OnlyTrevel />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <PersonList names={eventList} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <PersonList names={eventList} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <PersonList names={eventList} />
                </Grid>
            </Grid>
            <Box component="section" sx={{ p: 3, border: '1px dashed grey' }}>
                This Box renders as an HTML section element.
            </Box>
        </Container>
    )
}
export default HomePages;
export { };