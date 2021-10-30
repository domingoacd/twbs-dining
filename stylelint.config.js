module.exports = {
  plugins: ['stylelint-order'],
  extends: ['./stylelint.order.js'],
  rules: {
    "color-hex-case": "upper",
		"color-hex-length": "short",
		"color-named": "never",
		"declaration-block-trailing-semicolon": "always",
		"at-rule-empty-line-before": [
			"always",
			{
				"except": [
					"first-nested"
				]
			}
		],
		"custom-property-empty-line-before": [
			"always",
			{
				"except": [
					"after-custom-property",
					"first-nested"
				]
			}
		],
		"declaration-empty-line-before": [
			"always",
			{
				"except": [
					"after-declaration",
					"first-nested"
				]
			}
		],
		"block-closing-brace-empty-line-before": "never",
		"rule-empty-line-before": "always",
    "max-empty-lines": 2,
    "block-no-empty": true,
	}
}