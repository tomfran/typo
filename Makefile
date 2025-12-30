.PHONY: release release-bump release-minor release-major format format-check help

release: ## Manual release
	@./scripts/release.sh manual

release-bump: ## Bump version and release
	@./scripts/release.sh bump

release-minor: ## Minor version release
	@./scripts/release.sh minor

release-major: ## Major version release
	@./scripts/release.sh major

format: ## Format JS, CSS, and TOML files.
	@npx --yes prettier --write "**/*.{js,css}"
	@npx --yes @taplo/cli fmt

format-check: ## Check format on JS, CSS, and TOML files.
	@npx --yes prettier --check "**/*.{js,css}"
	@npx --yes @taplo/cli fmt --check

help: ## Show available targets
	@echo 'Available commands:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf " - %-15s %s\n", $$1, $$2}'