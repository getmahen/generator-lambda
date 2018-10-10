resource "consul_key_prefix" "<%= lambdaName %>" {
  path_prefix = "${var.lambda_name}/"

  "subkeys" {
    "vault/url" = "https://vault.credo${var.environment}.dev"
  }
}
