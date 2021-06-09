import { Table, Spinner, Link } from '@/components/Elements';

import { useDiscussions } from '../hooks/useDiscussions';
import { Discussion } from '../types';

import { DeleteDiscussion } from './DeleteDiscussion';

export const DiscussionsList = () => {
  const discussionsQuery = useDiscussions();

  if (discussionsQuery.isLoading) {
    return <Spinner />;
  }

  if (!discussionsQuery.data) return null;

  return (
    <Table<Discussion>
      data={discussionsQuery.data}
      columns={[
        {
          title: 'Title',
          field: 'title',
        },
        {
          title: 'Description',
          field: 'description',
        },
        {
          title: '',
          field: 'id',
          Cell({ entry: { id } }) {
            return <Link to={`./${id}`}>View</Link>;
          },
        },
        {
          title: '',
          field: 'id',
          Cell({ entry: { id } }) {
            return <DeleteDiscussion id={id} />;
          },
        },
      ]}
    />
  );
};
