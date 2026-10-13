FROM oven/bun:1.4.3 AS bun

FROM node:24-bookworm-slim

WORKDIR /workspaces

COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun

# Git and GPG are used for signed commits in the dev container.
RUN apt-get update && apt-get install --no-install-recommends -y \
    git \
    gnupg \
    socat \
    && rm -rf /var/lib/apt/lists/*

CMD ["sleep", "infinity"]
