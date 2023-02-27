import { Link } from 'react-router-dom';
import { Card, Container, Box, ItemList } from '../../styles/BaseStyles';
import { Price, Tags } from '../';

export function Products({ data, isLoading, isError }) {
  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (data) {
    return (
      <Container>
        <ItemList>
          {data.map((item) => (
            <Card key={item.id}>
              <Link to={item.id}>
                <img src={item.imageUrl} alt={item.title} />
                <Box>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Price item={item} />
                  {item.tags && <Tags data={item.tags} />}
                </Box>
              </Link>
            </Card>
          ))}
        </ItemList>
      </Container>
    );
  }
}
