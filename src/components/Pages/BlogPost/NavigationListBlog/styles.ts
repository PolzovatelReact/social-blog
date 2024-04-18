import { createStyles, makeStyles, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        MenuLeft: {
            padding: '16px',
            borderRadius: '24px',
             background: theme.palette.type === 'dark' 
                ? theme.palette.primary.dark 
                : 'rgb(133 133 133 / 12%)',
        },

        MenuLeftUl: {
            padding: '0px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            gap: '16px',
        },
        MenuLeftLi: {
            margin: 0,
            listStyleType: 'none',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
        },
        MenuLeftLink: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: theme.palette.action.selected,
            fontFamily: 'Inter',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: '21px',
            textAlign: 'left',
            textDecoration: 'none',
            padding: '0 0 16px 0',
            width: '100%',
        },
        BgColor: {
            background: theme.palette.action.disabledBackground,
            borderRadius: '24px',
            marginTop: '18px',
        },

    })
);

export default useStyles;


