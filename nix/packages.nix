{ pkgs, pkgs-2305, atomi, atomi_classic, pkgs-nov-08-23 }:
let

  all = {
    atomipkgs_classic = (
      with atomi_classic;
      {
        inherit
          sg;
      }
    );
    atomipkgs = (
      with atomi;
      {
        inherit
          infisical
          pls;
      }
    );
    nix-2305 = (
      with pkgs-2305;
      { }
    );
    nov-08-23 = (
      with pkgs-nov-08-23;
      {
        nodejs = nodejs_20;
        npm = nodePackages.npm;
        inherit
          coreutils
          yq-go
          gnused
          gnugrep
          bash
          jq
          findutils

          git

          bun
          treefmt
          gitlint
          shellcheck
          ;
      }
    );
  };
in
with all;
nix-2305 //
atomipkgs //
atomipkgs_classic //
nov-08-23
