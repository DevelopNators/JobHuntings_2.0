import Pagination from 'react-bootstrap/Pagination';

const CardPagination = ({ nextPage, previousPage, pageNumber }) => {
  
  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <Pagination>
        <Pagination.First onClick={() => previousPage()} />
        <Pagination.Prev onClick={() => previousPage()} />
        <Pagination.Item active>{pageNumber}</Pagination.Item>
        <Pagination.Next onClick={() => nextPage()} />
        <Pagination.Last onClick={() => nextPage()} />
      </Pagination>
    </div>
  );
};

export default CardPagination;
