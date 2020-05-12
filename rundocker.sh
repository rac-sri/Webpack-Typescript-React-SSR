docker image rm -f ssr
docker build --tag ssr .
docker run  --init --rm --mount type=bind,source="$(pwd)"/,target=/node/src --publish 3000:3000 ssr
