terraform {
  backend "s3" {
    key    = "lambda/<%= lambdaName %>"
  }
}