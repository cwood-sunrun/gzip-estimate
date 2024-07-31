# Compressed JSON Record Size Estimator 

No dependency script to help estimate size of compressed (gzip) records that will be stored in redis. 

Two inputs are required -- an example JSON string and the number of records to be stored. The suggestion is to find the longest example string so that the estimation is higher, and thus more conservative.
