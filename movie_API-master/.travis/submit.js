const { exec } = require("child_process");
const https = require("https");
const { readFileSync, unlinkSync } = require("fs");
const {
  URCLASS_URL,
  URCLASS_KEY,
  ASSESSMENT_ID,
  TRAVIS_PULL_REQUEST_SLUG
} = process.env;

if (URCLASS_KEY === "\n") {
  throw new Error("urclass key is missing");
}

if (TRAVIS_PULL_REQUEST_SLUG === "\n") {
  throw new Error("github username is missing");
}


exec(
  "npx lerna run --no-bail report --stream",
  (err, stdout, stderr) => {
    let resultServer, resultClient, ps, pc;
    try {
      resultServer = readFileSync('./packages/server/report.json')
      resultServer = resultServer.toString()
      unlinkSync('./packages/server/report.json')
      ps = JSON.parse(resultServer)
    }
    catch {
      ps = {}
    }

    try {
      resultClient = readFileSync('./packages/client/report.json')
      resultClient = resultClient.toString()
      unlinkSync('./packages/client/report.json')
      pc = JSON.parse(resultClient)
    }
    catch {
      pc = {}
    }

    let result = {
      "numFailedTestSuites": (ps.numFailedTestSuites || 0) + (pc.numFailedTestSuites || 0),
      "numFailedTests": (ps.numFailedTests || 0) + (pc.numFailedTests || 0),
      "numPassedTestSuites": (ps.numPassedTestSuites || 0) + (pc.numPassedTestSuites || 0),
      "numPassedTests": (ps.numPassedTests || 0) + (pc.numPassedTests || 0),
      "numPendingTestSuites": (ps.numPendingTestSuites || 0) + (pc.numPendingTestSuites || 0),
      "numPendingTests": (ps.numPendingTests || 0) + (pc.numPendingTests || 0),
      "numRuntimeErrorTestSuites": (ps.numRuntimeErrorTestSuites || 0) + (pc.numRuntimeErrorTestSuites || 0),
      "numTodoTests": (ps.numTodoTests || 0) + (pc.numTodoTests || 0),
      "numTotalTestSuites": (ps.numTotalTestSuites || 0) + (pc.numTotalTestSuites || 0),
      "numTotalTests": (ps.numTotalTests || 0) + (pc.numTotalTests || 0)
    }

    const username = TRAVIS_PULL_REQUEST_SLUG.split("/")[0];

    const options = {
      hostname: URCLASS_URL,
      path: `/production/submit/sprint`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(JSON.stringify(options));
    console.log(result);

    const body = {
      assessment_id: ASSESSMENT_ID,
      githubUsername: username,
      type: "jest",
      result: result,
    };

    makeRequest(options, body);
  }
);

function makeRequest(options, body) {
  const req = https.request(options, (res) => {
    let data;
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("data from urclass is ", data);
      if (res.statusCode >= 400) {
        if (res.statusCode === 400) {
          throw new Error("invalid github username.");
        }
        throw new Error("There is an error on response from urclass.");
      }
    });
  });

  req.on("error", (e) => {
    console.log(e);
    throw new Error("data did not send to urclass");
  });

  req.write(JSON.stringify(body));
  req.end();
}