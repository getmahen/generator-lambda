output "lambda_arn" {
  value = "${aws_lambda_function.<%= lambdaName %>.arn}"
}

output "lambda_function_name" {
  value = "${aws_lambda_function.<%= lambdaName %>.function_name}"
}

output "lambda_function_version_metadata" {
  value = "${data.aws_s3_bucket_object.<%= lambdaName %>_pkg.metadata}"
}