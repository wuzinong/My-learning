import { FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  PDFViewer,
  usePDF,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Link,
  Note,
} from '@react-pdf/renderer';
import Box from '../../components/Box';

const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  section: { color: 'white', textAlign: 'center', margin: 30 },
});

const Button = styled.button<any>`
  background-color: lightblue;
  color: white;
`;

const MyDoc = () => {
  return (
    <Document>
      <Page size='A4' style={styles.page} wrap>
        <Text
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
        <View style={styles.section}>
          <Text>Section #1</Text>
          <Link src='https://g.cn'>This is a link</Link>
        </View>
        <View style={{ backgroundColor: 'white', borderRadius: '8px' }}>
          <Text style={{ fontSize: '24px' }}>Library Materials</Text>
          <Text></Text>
        </View>
      </Page>

      <Page size='A4' style={styles.page} wrap>
        <Text
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />

        <View
          render={({ pageNumber }) =>
            pageNumber % 2 === 0 && (
              <View style={{ background: 'red' }}>
                <Text>I'm only visible in odd pages!</Text>
              </View>
            )
          }
        />
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>

      <Page size='A4' style={styles.page} wrap>
        <Text
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />

        <View style={styles.section}>
          <Text>Section #3</Text>
        </View>
      </Page>
    </Document>
  );
};

const ReactPdfDemo: FunctionComponent = () => {
  const [instance, updateInstance] = usePDF({ document: MyDoc() });

  if (instance.loading) return <div>Loading ...</div>;

  if (instance.error) return <div>Something went wrong</div>;
  return (
    <Box>
      <Button as='a' href={instance.url} download='test.pdf'>
        Download React-pdf
      </Button>
    </Box>
  );
};

export default ReactPdfDemo;
