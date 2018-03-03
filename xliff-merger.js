var xslt4node = require('xslt4node');

var config = {
    xsltPath: 'xliff-merger.template.xsl',
    sourcePath: 'messages.fr-generated.xlf',
    result: 'messages.fr-merged.xlf'
};

console.log("Transforming", config.sourcePath, "to", config.result);

xslt4node.transform(config, function (err) {
    if (err) {
        console.log(err);
    } else
        console.log("Done!");
});

