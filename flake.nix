{
  description = "weatherai app";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    devshell.url = "github:numtide/devshell";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, devshell }:
    let
      targetSystems = [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-darwin"
        "x86_64-linux"
      ];

      inherit (flake-utils.lib) eachSystem;

      eachDefaultSystem = eachSystem targetSystems;
    in

    # Dev Shell Config
    eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;

          overlays = [
            devshell.overlays.default
          ];
        };
      in
      {
        devShell = pkgs.devshell.fromTOML ./devshell.toml;
      });
}
