#!/usr/bin/env node

const util = require('util');
const zlib = require('zlib');
const gzip = util.promisify(zlib.gzip);
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const parseNumber = async (input) => {
  if (!input) {
    throw Error("Invalid number given")
  }

  const result = Number(input);

  if (Number.isNaN(result)) {
    throw Error("Invalid number given")
  }

  return result;
}

const main = async () => {
  const rl = readline.createInterface({ input, output });
  const recordExample = await rl.question('Paste the longest example record string you intend to store: ');
  const count = await rl.question('How many records will be stored in Redis? ').then(parseNumber);

  const compressedRecord = await gzip(recordExample);
  const estimatedSize = compressedRecord.length * count;
  const compressionRatio = recordExample.length / compressedRecord.length;

  console.log(`Estimated Size: ${estimatedSize} bytes, ${estimatedSize / Math.pow(10, 9)} gigabytes`);
  console.log(`Compression Ratio: ${compressionRatio} `);
  rl.close();
}

main().then(() => { }).catch(e => console.error(e));
