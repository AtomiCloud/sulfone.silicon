{ pkgs, packages }:
with packages;
{
  system = [
    atomiutils
  ];

  dev = [
    pls
    git
  ];

  infra = [
  ];

  main = [
    bun
    infisical
    nodejs
  ];

  lint = [
    # core
    treefmt
    gitlint
    shellcheck
    sg
    biome
  ];

  releaser = [
    sg
  ];
}
