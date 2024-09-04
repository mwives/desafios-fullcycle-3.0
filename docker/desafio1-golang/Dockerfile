FROM golang:latest AS builder

WORKDIR /app

COPY . .

RUN go build -o main ./main.go

FROM scratch 

COPY --from=builder /app/main ./

CMD ["./main"]
