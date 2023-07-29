import styled from 'styled-components';
import { generate } from './imgboxshadow';
import { useRef } from 'react';

const ImageShadow = () => {
  const imgRef = useRef(null);
  const generateHtml = () => {
    generate(imgRef.current);
  };
  return (
    <div>
      <h1>Image shadow</h1>
      <input ref={imgRef} type='file' />
      <button onClick={generateHtml}>get html</button>
    </div>
  );
};

export default ImageShadow;
