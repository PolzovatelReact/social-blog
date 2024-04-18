
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        nav: {
            padding: '50px 0',
            textAlign: 'left',
        },
          topSpace: {
           marginTop: '20px',
        },
        h1Style: {
            color: '#44444e',
            fontSize: 'calc(3.2vw + 1rem)',
            lineHeight: '61px',
            fontWeight: 900,
            margin: 0,
            [theme.breakpoints.down('sm')]: {
                lineHeight: '30px', // Значение для мобильных устройств
            },
        },
        backgroundImage: {
            height: '550px',
            '@media (max-width: 600px)': {
            height: '300px',
          },
        },

         adaptiveImage: {
            width: 100,
            maxHeight: '400px',
            objectFit: 'cover'
        },

  
    })
);


export default useStyles;