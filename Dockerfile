FROM node:20-slim

WORKDIR /home/node/app

# Necessary for Gpg Sign in Devcontainer
RUN apt update && apt install --no-install-recommends -y \
        git gpg gnupg gpg-agent socat

CMD ["tail", "-f", "/dev/null"]