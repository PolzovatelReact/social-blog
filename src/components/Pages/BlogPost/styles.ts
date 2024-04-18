import { createStyles, makeStyles, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>


    createStyles({
        ContentBlogMain: {
            display: 'flex',
            gap: '24px',
            '@media (max-width: 600px)': {
                display: 'flex',
                flexDirection: 'column',
            },
        },
        NavigationListBblog: {
            width: '25%',
            marginTop: '20px',
            '@media (max-width: 600px)': {
                marginTop: '3px',
                width: '100%',

            },
        },
        ContentBlogMainRight: {
            width: '85%',
        },
        BlogRight: {
            width: '100%',
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
        },
        Articles: {
             background: theme.palette.type === 'dark' 
                ? theme.palette.primary.dark 
                : 'rgb(133 133 133 / 12%)',
            
            display: 'flex',
            borderRadius: '24px',
            width: '100%',
            margin: '20px 0px',
            '@media (max-width: 600px)': {
                display: 'flex',
                flexDirection: 'column',
            },
        },
        ArticlesLeft: {
            margin: 0,
            width: '40%',
            '@media (max-width: 600px)': {
                width: '100%',
            },
        },
        ArticlesRight: {
            margin: 0,
            width: '60%',
            textAlign: 'left',
            '@media (max-width: 600px)': {
                width: '100%',
            },
        },
        SpaceBetweenText: {
            margin: 0,
            display: 'flex',
          
        },
        ArticlesRightBlock: {
            padding: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
        },
        ImgArticles: {
            width: '100%',
            borderRadius: '24px 0 0 24px',
            height: '334px',
            objectFit: 'scale-down',
            objectPosition: 'center',
        },

        BlogContent: {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '21px',
            textAlign: 'left'
        },
        buttonClass: {
            background: '#a6a6a6',
        }
    })
);

export default useStyles;
