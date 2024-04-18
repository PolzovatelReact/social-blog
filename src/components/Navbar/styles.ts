
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      padding: '20px 0',
      letterspacing: 'normal',
    },
    navRow: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      columnGap: '30px',
      rowGap: '20px',
      flexWrap: 'wrap'
    },
    logo: {
      marginRight: 'auto',
      fontSize: '24p',
      fontFamily: 'Poppins, sans-serif',
    },
    logoStrong: {
      fontWeight: 700,
    },
    navList: {
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: '10px',
      alignItems: 'center',
      columnGap: '40px',
      fontSize: '16px',
      fontWeight: 500,
      fontFamily: 'Poppins, sans-serif',
    }
  })
);

export default useStyles;