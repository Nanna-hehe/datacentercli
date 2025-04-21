module.exports = {
  testMatch: [
    "**/junit/?(*.)+(spec|test).[jt]s?(x)",
  ],
  verbose: true,
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "reports",
        outputName: "junit-report.xml",
      },
    ],
  ],
};
