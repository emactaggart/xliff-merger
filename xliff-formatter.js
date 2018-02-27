var xslt4node = require('xslt4node');

var config = {
    xsltPath: 'xliff-template.xsl',
    sourcePath: 'base.xlf',
    result: 'merged.xlf'
};

console.log("Transforming", config.sourcePath, "to", config.result);

xslt4node.transform(config, function (err) {
    if (err) {
        console.log(err);
    } else
        console.log("Done!");
});

