.PHONY: release release-bump release-minor release-major

release:
	@./scripts/release.sh manual

release-bump:
	@./scripts/release.sh bump

release-minor:
	@./scripts/release.sh minor

release-major:
	@./scripts/release.sh major