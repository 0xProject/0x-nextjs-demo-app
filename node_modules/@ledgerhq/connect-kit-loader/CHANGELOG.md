# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 1.0.2 - 2022-12-21
### Changed
- Expose WalletConnect's connector property as optional in the
  EthereumProvider type for integration into web3-onboard.

## 1.0.1 - 2022-12-14
### Changed
- Add `"type":"module"` to `package.json`.

## 1.0.0 - 2022-11-17
### Changed
- Release workflow changes.
- Use version 1 on Connect Kit URL.

## 1.0.0-beta.8 - 2022-11-17
### Changed
- Make sure loadConnectKit is running on client side.

### Fixed
- CheckSupportOptions props.

## 1.0.0-beta.7 - 2022-11-15
### Changed
- Make disconnect on EthereumProvider optional since it is only available on
  WalletConnect.

## 1.0.0-beta.6 - 2022-11-14
### Changed
- Added disconnect and emit to the EthereumProvider interface to implement
  the lerger wagmi connector.

## 1.0.0-beta.5 - 2022-11-10
### Changed
- The rpc parameter is now optional.
- The chainId parameter is now optional, defaults to 1.

## 1.0.0-beta.4 - 2022-11-01
### Changed
- Release workflow changes.

## 1.0.0-beta.3 - 2022-11-01
### Fixed
- Declared @rollup/plugin-alias as a dev dependency.

## 1.0.0-beta.2 - 2022-10-28
This is the first public version of the package.

### Added
- Load the Connect Kit script from a CDN.
