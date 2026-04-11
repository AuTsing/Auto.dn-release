import process from 'node:process';
import stream from 'node:stream/promises';
import fs from 'node:fs';
import * as core from '@actions/core';

const TOKEN = process.env.TOKEN;
const TAG = process.env.TAG;
const FILENAME = 'Autodn.apk';

const infoResp = await fetch(`https://api.github.com/repos/AuTsing/Auto.dn/releases/tags/${TAG}`, {
    headers: { Authorization: `Bearer ${TOKEN}`, Accept: 'application/vnd.github+json' },
});
const info = await infoResp.json();

console.log(info);

const asset = info.assets.find(it => it.name.endsWith('.apk'));
const assetResp = await fetch(asset.url, {
    headers: { Authorization: `Bearer ${TOKEN}`, Accept: 'application/octet-stream' },
});
const fws = fs.createWriteStream(FILENAME);
await stream.pipeline(assetResp.body, fws);

core.setOutput('files', FILENAME);
core.setOutput('body', info.body);
