const RewritingStream = require('parse5-html-rewriting-stream');
const fs = require('fs');


const rewriter = new RewritingStream();

// TODO: this should not be necessary!
rewriter.tokenizer.preprocessor.bufferWaterline = Infinity;

fs.createReadStream('./example.html', 'utf8')
  .pipe(rewriter)
  .pipe(fs.createWriteStream('rewritten.html'))
  .on('finish', () => {
    const original = fs.readFileSync('./example.html', 'utf8');
    const transformed = fs.readFileSync('./rewritten.html', 'utf8');

    console.log(original.length, transformed.length);
    if (original !== transformed) {
      throw Error('WRONG');
    }
  });
