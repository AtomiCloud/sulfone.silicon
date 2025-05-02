{ pkgs, pkgs-2411, atomi }:
let

  all = {
    atomipkgs = (
      with atomi;
      {
        inherit
          atomiutils
          sg
          pls;
      }
    );
    nix-2411 = (
      with pkgs-2411;
      {
        nodejs = nodejs_22;
        inherit
          git
          infisical
          bun
          treefmt
          gitlint
          shellcheck
          biome
          ;
      }
    );
  };
in
with all;
nix-2411 //
atomipkgs
