.PHONY: check_defined __check_defined help run artifact deploy touch-env

default: help


####################################################
# Shared variables used by the targets that follow #
####################################################

# retrieve the currently checked out git SHA
GIT_SHA = $(shell git rev-parse HEAD)

# build a string we can use to tag containers for build/deploy
DOCKER_REPOTAG = $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_NAME):$(GIT_SHA)


####################################################
# Shared functions used by the targets that follow #
####################################################

# Check that given variables are set and all have non-empty values,
# die with an error otherwise.
#
# Params:
#   1. Variable name(s) to test.
#   2. (optional) Error message to print.
check_defined = \
	$(strip $(foreach 1,$1, \
		$(call __check_defined,$1,$(strip $(value 2)))))
__check_defined = \
	$(if $(value $1),, \
		$(error Undefined variable $1$(if $2, ($2))))


########################################################
# Primary make targets (those used somewhat regularly) #
########################################################

help: ## Show this help
	@echo "venuebooker-ui"
	@echo "============"
	@echo
	@fgrep -h " ## " $(MAKEFILE_LIST) | fgrep -v fgrep | sed -Ee 's/([a-z.]*):[^#]*##(.*)/\1##\2/' | column -t -s "##"

run: touch-env ## Run the application locally
	@docker-compose build service
	@docker-compose run --service-ports --rm service

artifact: touch-env ensure-variables ## Build a container and push to the configured registry
	docker build -t $(DOCKER_REPOTAG) .
	docker push $(DOCKER_REPOTAG)

deploy: touch-env ensure-variables ## Deploy the application to Marathon
	export DOCKER_REPOTAG=$(DOCKER_REPOTAG); \
	export LABEL_GIT_SHA=$(GIT_SHA); \
	env > .env.deploy; \
	docker-compose run --rm shpkpr

########################################################################
# Utility targets (typically not run directly, but can be if required) #
########################################################################

ensure-variables:
	@:$(call check_defined, DOCKER_REGISTRY, Docker registry hostname)
	@:$(call check_defined, DOCKER_IMAGE_NAME, Docker image name e.g. venuebooker-ui)
	@:$(call check_defined, GIT_SHA, Git commit SHA e.g. d187ba8e8164beb1170a8a776c02cfbcfaf9fec7)

touch-env:
	@touch .env .env.deploy
