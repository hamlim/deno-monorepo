# Deno Monorepo Gotchas

1. `deno install` doesn't work with `latest` version tags

- A number of issues related to this on their repo:
  https://github.com/denoland/deno/issues?q=sort:updated-desc+is:issue+programming+error:+cannot+use+matches+with+a+tag:+latest

2. `deno check` doesn't support the `bun:` import scheme

- Opened an issue here: https://github.com/denoland/deno/issues/25935

