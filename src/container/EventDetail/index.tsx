import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import EventDetailTemplateContainer from './eventDetailContainer';

import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';
import { getNewsEventService } from 'services/eventDetail';
import { getNewsTagService } from 'services/newsDetail';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

const EventDetailContainer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useQuery(
    ['GetNewsEventData', slug],
    () => getNewsEventService(slug || ''),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );
  const { data: newsTagData } = useQuery(
    ['GetNewsTagData', slug],
    () => getNewsTagService({
      is_popular: true,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );
  return (
    <>
      <HelmetContainer />
      <Section modifiers="noPt">
        <EventDetailTemplateContainer data={data} newsTagData={newsTagData} />
      </Section>
    </>
  );
};
export default EventDetailContainer;
