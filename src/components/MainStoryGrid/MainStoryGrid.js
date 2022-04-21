import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          
          {SECONDARY_STORIES.map((story, index) => (
            <Stories key={story.id}><SecondaryStory  {...story} /></Stories>
          ))}
          
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <Opinions key={story.id}><OpinionStory  {...story} /></Opinions>
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --spacing: 16px;
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp}{
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
    margin-bottom: 64px;
    gap: 48px 0px;
  }

  @media ${QUERIES.laptopAndUp}{
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    grid-template-columns: 5fr 4fr 3fr;
    gap: 0px;
    margin-bottom: 56px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: var(--spacing);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp}{
    padding-left: var(--spacing);
  }

  @media ${QUERIES.laptopAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: var(--spacing);
    margin-bottom: var(--spacing);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Stories = styled.div`

&:not(:first-of-type){
  padding-top: var(--spacing);
}

&:not(:last-of-type){
  border-bottom: 1px solid var(--color-gray-300);
  padding-bottom: var(--spacing);
}
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp}{
    padding-left: var(--spacing);
    margin-bottom: var(--spacing);
  }
`;

const OpinionList = styled(StoryList)`
  @media ${QUERIES.tabletOnly}{
    flex-direction: row;
    gap: 32px;
  }
`;

const Opinions = styled(Stories)`
 @media ${QUERIES.tabletOnly}{
    --spacing: 0;
    &:not(:last-of-type){
      border-bottom: 0;
    }
    flex: 1;
  } 
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp}{
    border-top: 1px solid var(--color-gray-300);
    margin-left: var(--spacing);
    padding-top: var(--spacing);
    
  }
`;

export default MainStoryGrid;
