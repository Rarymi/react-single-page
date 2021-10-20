import { ArticleContainer } from './style';

const Article = ({ article, index }) => {
  const buttonHandler = (url) => {
    window.open(url, '_blank');
  };
  const isIndexEven = () => {
    return index === 0 || index % 2 === 0;
  };

  return (
    <ArticleContainer>
      {isIndexEven() && (
        <div className='classEven'>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <button onClick={() => buttonHandler(article.url)}>Saiba Mais</button>
        </div>
      )}
      <img src={article.img} alt='' />
      {!isIndexEven() && (
        <div className='classOdd'>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <button onClick={() => buttonHandler(article.url)}>Saiba Mais</button>
        </div>
      )}
    </ArticleContainer>
  );
};

export default Article;
