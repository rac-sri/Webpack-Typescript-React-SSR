docker image rm -f eosis
docker build --tag eosis .
docker run  --init --rm --mount type=bind,source="$(pwd)"/,target=/node/src --publish 8080:8080 eosis