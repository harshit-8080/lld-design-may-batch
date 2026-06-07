abstract class ReportGenerator {
  // template method......
  exportReport() {
    // fetch data
    this.fetchData(); // step1

    // format data
    this.formatData(); // step2

    // validate data
    this.validatData(); // step3

    // create download links
    this.downloadLink(); // step4
  }

  fetchData() {
    console.log("fecthing data");
  }

  abstract formatData(): void;

  abstract validatData(): void;

  downloadLink() {
    console.log("http://some_link@aws.com");
  }
}

class CSVReportGenerator extends ReportGenerator {
  formatData() {
    console.log("CSV formate data");
  }

  validatData() {
    console.log("CSV validate Data");
  }
}

class PDFReportGenerator extends ReportGenerator {
  formatData() {
    console.log("PDF formate data");
  }

  validatData() {
    console.log("PDF validate Data");
  }
}

const csvReport = new CSVReportGenerator();
// csvReport.exportReport();

const pdfReport = new PDFReportGenerator();
pdfReport.exportReport();
