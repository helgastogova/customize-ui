import {useQuery, gql} from '@apollo/client';

import Loader from '@ui/loader';
import Text from '@ui/text';
import ContentInner from '@ui/contentInner';

const QUERY_PAGE = gql`
  query Page {
    pages(where: {name: "about"}) {
      name
      content {
        html
      }
    }
  }
`;

const Reviews: React.FC = () => {
  const {data, error, loading} = useQuery(QUERY_PAGE);

  if (loading) {
    return (
      <ContentInner>
        <Loader centered />
      </ContentInner>
    );
  }

  if (error || !data) {
    return <ContentInner>sorry...</ContentInner>;
  }

  const pageItems = data.pages.map(({name, content}, key) => {
    return (
      <div key={key}>
        {name && <Text tagName="h1">{name}</Text>}
        {content?.html ? (
          <Text dangerouslySetInnerHTML={{__html: content?.html}} />
        ) : (
          <>sorry</>
        )}
      </div>
    );
  });
  return <ContentInner>{pageItems}</ContentInner>;
};

export default Reviews;
