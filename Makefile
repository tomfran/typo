.PHONY: release release-bump release-minor release-major format format-check help

release: ## Manual release
	@./scripts/release.sh manual

release-bump: ## Bump version and release
	@./scripts/release.sh bump

release-minor: ## Minor version release
	@./scripts/release.sh minor

release-major: ## Major version release
	@./scripts/release.sh major

format: ## Format JS and CSS files
	npx prettier --write "**/*.{js,css}"

format-check: ## Check if JS and CSS files are formatted
	npx prettier --check "**/*.{js,css}"

help: ## Show available targets
	@echo 'Available commands:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf " - %-15s %s\n", $$1, $$2}'