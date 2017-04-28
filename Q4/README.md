<a href="https://www.getpostman.com/"><img src="https://raw.githubusercontent.com/postmanlabs/postmanlabs.github.io/develop/global-artefacts/postman-logo%2Btext-320x132.png" /></a><br />
_Supercharge your API workflow<br/>Modern software is built on APIs. Postman helps you develop APIs faster._

## Getting started

To run Newman, ensure that you have NodeJS >= v4. A copy of the NodeJS installable can be downloaded from [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager). 
Direct link download in Git
[Windows Installer 64](https://github.com/arseniogalvao/Hostelworld/blob/master/Q4/node-v6.10.2-x64.msi);
[Machintosh Installer](https://github.com/arseniogalvao/Hostelworld/blob/master/Q4/node-v6.10.2.pkg).

The easiest way to install Newman is using NPM. If you have NodeJS installed, it is most likely that you have NPM
installed as well.

```terminal
$ npm install newman --global
```

The `newman run` command allows you to specify a collection to be run. You can easily export your Postman
Collection as a json file from the [Postman App](https://www.getpostman.com/apps) and run it using Newman.

```terminal
$ newman run https://github.com/arseniogalvao/Hostelworld/blob/master/Q4/Gists_suits.json
```

If your collection file is available as an URL (such as from our [Cloud API service](https://api.getpostman.com)),
Newman can fetch your file and run it as well.

```terminal
$ newman run https://www.getpostman.com/collections/913cbf0bdf6e84acae56
```
For the complete list of options, refer the [Commandline Options](#commandline-options) section below.

![terminal-demo](https://raw.githubusercontent.com/postmanlabs/postmanlabs.github.io/develop/global-artefacts/newman-terminal.gif)

---

## License
This software is licensed under Apache-2.0. Copyright Postdot Technologies, Inc. See the [LICENSE.md](LICENSE.md) file for more information.

[![Analytics](https://ga-beacon.appspot.com/UA-43979731-9/newman/readme)](https://www.getpostman.com)
