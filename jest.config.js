module.exports = {
  testEnvironment: "jsdom", // or "node" depending on your setup
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "reports/jest", outputName: "junit.xml" }],
    ["jest-html-reporter", {
      pageTitle: "Test Report",
      outputPath: "reports/jest-report.html",
      includeFailureMsg: true,
      includeConsoleLog: true,
    }],
  ],
};
