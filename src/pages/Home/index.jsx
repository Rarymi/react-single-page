import ArticleList from '../../components/Home/ArticleList';
import { HomePageContainer } from './style';

export default function Home() {
  return (
    <HomePageContainer>
      <h1 style={{ color: '#141817' }}>Benefícios da inteligência artificial: quais são os principais?</h1>
      <ArticleList />
    </HomePageContainer>
  );
}
