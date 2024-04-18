import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from "@material-ui/core";
import myPost from './blogPostDB';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import useStyles from "./styles";
import {  NavigationListBlogT} from './NavigationListBlog';


const BlogPost: React.FC = () => {


    const postsPerPage = 4; // количество записей на одной странице
    const [currentPage, setCurrentPage] = useState(1);

    // Рассчитываем индексы начала и конца для текущей страницы
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = myPost.slice(indexOfFirstPost, indexOfLastPost);


    // Функция для изменения текущей страницы
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const classes = useStyles();


    useEffect(() => {

        document.title = "Заголовок вашей страницы";

        const metaDescriptionTag = document.querySelector('meta[name="description"]');
        if (metaDescriptionTag) {
            metaDescriptionTag.setAttribute('content', 'Описание короткое блога');
        } else {
            const newMetaTag = document.createElement('meta');
            newMetaTag.setAttribute('name', 'description');
            newMetaTag.setAttribute('content', 'Описание вашей страницы');
            document.head.appendChild(newMetaTag);
        }
    }, []);
    

    return (
        <div>                  
            <Container>
                <div className={classes.ContentBlogMain}>
                    <div className={classes.NavigationListBblog}>
                       <NavigationListBlogT />
                      
                    </div>
                    <div className={classes.ContentBlogMainRight}>
                        {currentPosts.map((post, index) => (
                            <div className={classes.BlogRight}>
                                <div className={classes.Articles} >                      
                                    <div className={classes.ArticlesLeft}>
                                        <img src={post.imageUrl} alt={post.alt} className={classes.ImgArticles} />
                                    </div>
                                    <div className={classes.ArticlesRight}>
                                        <div key={index} className={classes.ArticlesRightBlock}>
                                            <h2 className={classes.SpaceBetweenText}>{post.title}</h2>
                                            <div className={classes.SpaceBetweenText}> <CalendarMonthIcon /> <span>{post.data} </span></div>
                                            <p className={classes.SpaceBetweenText}>{post.description}</p>
                                            {/* <Link to={post.url}>Узнать больше</Link>*/}
                                            <Button component={Link} to={post.url} className={classes.buttonClass} >Узнать больше</Button>
                                   
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                {/* Кнопки для переключения страниц */}
            
            </Container>
                <div>
                    {Array.from({ length: Math.ceil(myPost.length / postsPerPage) }, (_, i) => (
                        <Button key={i} onClick={() => paginate(i + 1)}>{i + 1}</Button>
                    ))}
                </div>
        </div>
    );
};

export default BlogPost;