//import {useReviewsListQuery} from '../../generated/graphql';
import {useQuery} from '@apollo/client';
import {QUERY_POST_REVIEW} from './query';

import ContentInner from '@ui/contentInner';
import Loader from '@ui/loader';

import AddReviewForm from './form';

const Reviews: React.FC = () => {
  //const {data, error, loading} = useReviewsListQuery();
  const {loading, error, data} = useQuery(QUERY_POST_REVIEW);

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

  const listItems = data.reviews.map(({name, text}, key) => {
    return (
      <div key={key}>
        <div>{name}</div>
        <div>{text}</div>
      </div>
    );
  });
  return (
    <ContentInner>
      {listItems}
      {/* <AddReviewForm /> */}
    </ContentInner>
  );
};

export default Reviews;
