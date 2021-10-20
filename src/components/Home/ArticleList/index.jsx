import Articles from 'assets/json/articles.json';
import Article from '../Article';

const ArticleList = () => {
  return (
    <>
      {Articles.map((article, index) => (
        <div>
          <Article article={article} index={index} />
        </div>
      ))}
    </>
  );
};

export default ArticleList;
