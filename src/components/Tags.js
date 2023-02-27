import styled from 'styled-components';

export const Tag = styled.span`
  background-color: white;
  padding: 0.1em 0.3em;
  margin: 0.2em 0.2em 0 0;
`;

export function Tags({ data }) {
  return (
    <>
      {data.map((item) => {
        return <Tag key={item}>{item}</Tag>;
      })}
    </>
  );
}
