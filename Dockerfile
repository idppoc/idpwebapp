FROM node:latest AS js_build
COPY . /webapp
WORKDIR webapp
RUN npm install -g npm@8.12.1 && npm install --force && npm run build

FROM docker.io/madhukirans/idpapiserver:20220614115137 AS go_build

FROM alpine:latest
RUN apk add libc6-compat
WORKDIR /webapp
COPY --from=js_build /webapp/build* ./build/
COPY --from=go_build /apiserver/main ./main
EXPOSE 8080
ENTRYPOINT ["/webapp/main"]
