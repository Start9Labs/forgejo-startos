# overrides to s9pk.mk must precede the include statement
# Forgejo's upstream image ships only x86_64 + aarch64 (no riscv64), so skip riscv.
ARCHES := x86 arm
include node_modules/@start9labs/start-sdk/s9pk.mk
