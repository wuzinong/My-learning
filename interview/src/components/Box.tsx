import styled from 'styled-components';

const BoxBase = styled.div<any>`
  display: flex;
`;

const Box = (props: any) => {
  const mergedProps = {
    ...props,
  };
  console.log('mergedProps ', mergedProps);
  return <BoxBase {...mergedProps} />;
};

export default Box;
