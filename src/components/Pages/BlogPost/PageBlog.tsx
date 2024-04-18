import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPostProps } from './blogPostDB';
import { Container } from "@material-ui/core";
import useStyles from "./styles";


const PageBlog: React.FC<{ posts: BlogPostProps[] }> = ({ posts }) => {

    const classes = useStyles();
    const { postId } = useParams<{ postId: string }>(); // Получаем параметр маршрута postId

    // Находим выбранную запись по postId
    const selectedPost = posts.find(post => post.url === `/blogpost/${postId}`);

    // Если запись не найдена, можно отобразить сообщение об ошибке или выполнить другую логику
    if (!selectedPost) {
        return <div>Запись не найдена</div>;
    }

    // Отображаем содержимое выбранной записи
    return (
        <div>
            <Container>
                <nav aria-label="breadcrumb">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/blogpost">Блог</Link></li>
                        <li>{selectedPost.title}</li>
                    </ul>
                </nav>
                <h2>{selectedPost.title}</h2>
                <div className={classes.BlogContent}>
                    <p >{selectedPost.text}</p>
                </div>
                <Link to="/blogpost">Назад к списку постов</Link>
            </Container>
        </div>
    );
};

export default PageBlog;
