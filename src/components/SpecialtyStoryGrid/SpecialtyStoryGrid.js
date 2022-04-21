import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <StoryWrapper><MiniStory key={data.id} {...data} /></StoryWrapper>
          ))}
        </SportsStories>
       
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp}{
    grid-template-columns: minmax(0, auto);
    gap: 64px;
  }

  @media ${QUERIES.laptopAndUp}{
    grid-template-columns: 1fr minmax(0, 1fr);
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 22px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section``;

const StoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp}{
    min-width: 220px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp}{
   display: flex;
   grid-template-columns: revert;
   overflow: auto;
  }
`;

export default SpecialtyStoryGrid;
