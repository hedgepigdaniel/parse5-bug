# Minimal bug reproduction

## Run the succeeding test with workaround
```shell
yarn
node index.js
```

## Trigger the bug
Try removing the assignment to `bufferWaterline` in `index.js` - the test will fail because the contents of the script node is truncated at the beginning.
