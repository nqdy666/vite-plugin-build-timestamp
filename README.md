<h2 align='center'><samp>vite-plugin-build-timestamp</samp></h2>

<p align='center'>Generate a meta tag with the build time in the head of the HTML during the build process</p>

<p align='center'>
<a href='https://www.npmjs.com/package/vite-plugin-build-timestamp'>
<img src='https://img.shields.io/npm/v/vite-plugin-build-timestamp?color=222&style=flat-square'>
</a>
</p>

<br>

## Usage

Install

```bash
npm i vite-plugin-build-timestamp -D # yarn add vite-plugin-build-timestamp -D
```

Add it to `vite.config.js`

```ts
// vite.config.js
import VitePluginBuildTimestamp from 'vite-plugin-build-timestamp'

export default {
  plugins: [
    VitePluginBuildTimestamp()
  ],
}
```

Changes to `target.js` or `target.ts` will now restart the proxy without restarting Vite.

## License

MIT License © 2025 [nianqin](https://github.com/nqdy666)
