```docker
docker run --rm \
  -v $(PWD):$(PWD) \
  -w $(PWD) \
  znly/protoc \
  --plugin=protoc-gen-grpc=/usr/bin/protoc-gen-grpc-java \
  --java_out=./gen/JAVA/src/main/java \
  --grpc_out=./gen/JAVA/src/main/java --proto_path=./files/auth-service/v1 \
  ./files/auth-service/v1/*.proto

```