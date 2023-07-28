import { FunctionComponent, useRef } from 'react';
import styled from 'styled-components';
import { outputPDF } from './PDFUtils';
// import outputPdf2 from './PDFUtils2';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button<any>`
  background-color: lightblue;
  color: white;
  width: 250px;
  padding: 16px 0;
`;

const Title = styled.h2`
  text-align: center;
  color: lightgreen;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  padding: 16px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(105, 128, 145, 0.4);
  padding: 8px;
  margin-bottom: 8px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Footer = styled.footer`
  height: 30px;
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
`;

const PDFHeader = styled.header`
  background: lightblue;
  display: none;
`;
const HtmlCanvasDemo: FunctionComponent = () => {
  const pdfelem = useRef(null);
  const exportToPdfCanvas = () => {
    // outputPDF({
    //   element: pdfelem.current,
    //   contentWidth: 550,
    //   filename: 'test111.pdf',
    //   header: document.querySelector('header'),
    //   footer: document.querySelector('footer'),
    // });

    outputPDF({
      element: pdfelem.current,
      contentWidth: 550,
      filename: 'test111.pdf',
      header: document.querySelector('header'),
      footer: document.querySelector('footer'),
    });
  };
  return (
    <Wrapper ref={pdfelem} id='mypdf'>
      <PDFHeader>This is a pdf header</PDFHeader>
      <Button onClick={exportToPdfCanvas}>
        Download Html to Canvas + jspdf
      </Button>
      <Title id='mytitle'>Test pdf</Title>
      <InnerWrapper>
        {new Array(10).fill(1, 0, 9).map((item, index) => {
          return (
            <Section>
              <Title>Test title {index}</Title>
              {new Array(10).fill(1, 0, 9).map((it, i) => {
                return (
                  <div>
                    <p>
                      <b>Left part</b> This is a test message This is a test
                      message This is a test message This is a test message This
                      is a test message {i}
                    </p>
                    <p>
                      <b>Right part</b> This is a test message This is a test
                      message This is a test message This is a test message This
                      is a test message {i}
                    </p>
                  </div>
                );
              })}
            </Section>
          );
        })}
      </InnerWrapper>

      <Footer>
        <span className='pdf-footer-page'></span>/
        <span className='pdf-footer-page-count'></span>
      </Footer>
    </Wrapper>
  );
};

export default HtmlCanvasDemo;
