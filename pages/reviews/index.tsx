import {useReviewsListQuery} from '../../generated/graphql';

import ContentInner from '../../components/ui/contentInner';
import Loader from '../../components/ui/loader';

import AddReviewForm from './form';

const Reviews: React.FC = () => {
  const {data, error, loading} = useReviewsListQuery();

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
      <AddReviewForm />
    </ContentInner>
  );
};

export default Reviews;
