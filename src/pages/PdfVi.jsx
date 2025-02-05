import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      margin: 3,
      padding: 3,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });
  
  // Create Document Component
  function PdfVi() {
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/render a single page/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Medi-buddy+</Text>
            </View>
            <View style={styles.section}>
            <Text>World</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }

  export default PdfVi;