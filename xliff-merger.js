var path = require('path');
var xslt4node = require('xslt4node');

var sourceFile = process.argv[2] ? path.resolve(process.argv[2]) : "";
var resultFile = process.argv[3] ? path.resolve(process.argv[3]) : "";
var xsltFile = process.argv[4] ? path.resolve(process.argv[4]) : "";

if (!sourceFile) {
  throw new Error('Error: Please provide source path.');
}

if (!resultFile) {
  throw new Error('Error: Please provide output path.');
}

if (!xsltFile) {
  throw new Error('Error: Please provide template path.');
}

var config = {
  sourcePath: sourceFile,
  result: resultFile,
  xsltPath: xsltFile
};

console.log("-- XLIFF-MERGER: Transforming 🤖 --", config.sourcePath, "to", config.result);

xslt4node.transform(config, function (err) {
  if (err) {
    console.log(err);
  } else
    console.log("Done!");
});
