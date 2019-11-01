import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Planet = styled.div`
  margin: 0 0 10px;
  padding: 0 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #000;
  border-radius: 8px;
`;

const PlanetTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
`;

const Residents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resident = styled.div`
  margin: 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResidentImg = styled.img`
  margin: 0 0 10px;
  width: 60px;
  height: 60px;
`;

const ResidentName = styled.h3`
  font-size: 18px;
`;

export default ({ data }) => {
  return (
    <Wrap>
      {data.randmapi.locations.results.map((a, i) => (
        <Planet key={i}>
          <PlanetTitle>
            Planet:
            {a.name}
          </PlanetTitle>

          <Residents>
            {(a.residents || []).map((r, d) => (
              <Resident key={d}>
                <ResidentImg
                  src={r.image}
                  alt={r.name}
                />

                <ResidentName>
                  {r.name}
                </ResidentName>
              </Resident>
             ))}
          </Residents>
        </Planet>
      ))}
    </Wrap>
  )
}

export const query = graphql`
  {
    randmapi {
      locations {
        results {
          name
          residents {
            image
            name
          }
        }
      }
    }
  }
`;
