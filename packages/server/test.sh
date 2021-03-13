#!/bin/bash
# set -x

getConfigure() {
    echo '{"host": "svmb.hcmue.space", "port": 12345}'
}

setConfigure() {
    echo $1
}

"$@"

