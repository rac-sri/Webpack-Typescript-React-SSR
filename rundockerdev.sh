docker image rm -f ssr
docker build --tag ssr -f dev.dockerfile .
docker run  --init --rm --mount type=bind,source="$(pwd)"/,target=/node/src --publish 8080:8080 ssr