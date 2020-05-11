docker image rm -f eosis
docker build --tag eosis -f dev.dockerfile .
docker run  --init --rm --mount type=bind,source="$(pwd)"/,target=/node/src --publish 8080:8080 eosis