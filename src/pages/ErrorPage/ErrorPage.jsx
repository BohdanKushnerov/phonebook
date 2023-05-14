import { useNavigate } from 'react-router-dom';
import { MainButton } from 'styles/common/MainButton.styled';
import { PageContainer } from 'styles/common/PageContainer.styled';

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <PageContainer>
      <h1>Sorry, page not found</h1>
      <MainButton onClick={handleNavigate}>Back to Home page</MainButton>
    </PageContainer>
  );
}
