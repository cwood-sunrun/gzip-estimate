# Compressed JSON Record Size Estimator 

> A script to help estimate size of compressed (gzip) JSON values to be stored in Redis 

## Run it

```
./estimate
```

## Input 
Two inputs are required -- an example JSON string and the number of records to be stored. The suggestion is to find the longest example string so that the estimation is higher, and thus more conservative.

## Dependencies

Assumes a relatively new version of NodeJs is available.

