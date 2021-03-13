#!/bin/bash
# set -x

ipList=$(nmap -sn $1 | awk '/is up/ {print up}; {gsub (/\(|\)/,""); up = $NF}')
count=0
output=
for ip in $ipList
do
    model=$(curl --max-time 10 --silent http://$ip:8080/cgi-bin/model | cut -d' ' -f2)
    if [ ! -z "$model" ];then
        if [[ $model == *"Not"* ]]; then
            continue
        fi
        echo "found $ip model $model"
        count=$((count+1))

        output="${output} $ip:$model"
    fi
done
echo "number ip found $count"
echo "output $output"
