import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import {
  Wrap,
  Planet,
  PlanetTitle,
  Residents,
  Resident,
  ResidentImg,
  ResidentInfo,
  ResidentInfoBlock,
  ResidentInfoField,
  ResidentInfoValue,
  AlertText,
} from '../styled-components/main';

export default ({ data }) => {
  return (
    <Layout>
      <Wrap>
        {data.randmapi.locations.results.map((a, i) => (
          <Planet key={i}>
            <PlanetTitle>
              Planet:
              <strong>{a.name}</strong>
            </PlanetTitle>

            <Residents>
              {a.residents.map((r, d) => (
                <Resident key={d}>
                  {r.image && (
                    <React.Fragment>
                      <ResidentImg
                        src={r.image}
                        alt={r.name}
                        dead={r.status}
                      />

                      <ResidentInfo>
                        <ResidentInfoBlock>
                          <ResidentInfoField>
                            name:
                          </ResidentInfoField>
                          <ResidentInfoValue>
                            {r.name}
                          </ResidentInfoValue>
                        </ResidentInfoBlock>

                        <hr />

                        <ResidentInfoBlock>
                          <ResidentInfoField>
                            id:
                          </ResidentInfoField>
                          <ResidentInfoValue>
                            {r.id}
                          </ResidentInfoValue>
                        </ResidentInfoBlock>

                        <hr />

                        <ResidentInfoBlock>
                          <ResidentInfoField>
                            gender:
                          </ResidentInfoField>
                          <ResidentInfoValue>
                            {r.gender}
                          </ResidentInfoValue>
                        </ResidentInfoBlock>

                        <hr />

                        <ResidentInfoBlock>
                          <ResidentInfoField>
                            species:
                          </ResidentInfoField>
                          <ResidentInfoValue>
                            {r.species}
                          </ResidentInfoValue>
                        </ResidentInfoBlock>

                        <hr />

                        <ResidentInfoBlock>
                          <ResidentInfoField>
                            status:
                          </ResidentInfoField>
                          <ResidentInfoValue>
                            {r.status}
                          </ResidentInfoValue>
                        </ResidentInfoBlock>

                      </ResidentInfo>
                    </React.Fragment>
                  )}

                  {!r.image && (
                    <AlertText>
                      This planet is dead, open the portal!
                    </AlertText>
                  )}
                </Resident>
              ))}
            </Residents>
          </Planet>
        ))}
      </Wrap>
    </Layout>
  )
}

export const query = graphql`
  {
    randmapi {
      locations {
        results {
          name
          residents {
            id
            image
            name
            gender
            species
            status
          }
        }
      }
    }
  }
`;
