# <p align="center"><a href="https://api.mcsrvstat.us">MCSRVSTAT</a> Simple Javascript Wrapper</p>
<p align="center"><i>I do not own MCSRVSTAT, this is simply a wrapper for their API :)</i></p>

<p align="center">
<a href="https://npmjs.com/package/mcsrvstat-wrapper"><img src="https://nodei.co/npm/mcsrvstat-wrapper.png?downloads=true&downloadRank=true&stars=true"></a>

<p align="center">Easily fetch the status of a Minecraft server (Java or Bedrock) all from Node!</p>

# How do I use this?
You can utilize the following methods below.  
If something is missing from these responses that are returned from [MCSRVSTAT's API](https://api.mcsrvstat.us/) and you'd like to see them supported, create an issue!

## fetchJavaServer
Fetch the status of a Minecraft Java server
```js
const serverInfo = await fetchJavaServer('hostname.example.com');
console.log(serverInfo);
// { online: true, version: 'Requires MC 1.8 / 1.19', players: { online: 5, max: 20 }, connection: { ip: 'xxx.xxx.xxx.xxx', hostname: 'hostname.example.com' } }
```

## fetchBedrockServer
Fetch the status of a Minecraft Bedrock server
```js
const serverInfo = await fetchBedrockServer('hostname.example.com');
console.log(serverInfo);
// { online: true, version: 'x.xx.xx', players: { online: 5, max: 20 }, connection: { ip: 'xxx.xxx.xxx.xxx', hostname: 'hostname.example.com' } }
```

## fetchIcon
Generates a link to the servers icon
```js
let url = await mcsrvstat.fetchIcon('hostname.example.com');
console.log(url)
// 'https://api.mcsrvstat.us/icon/hostname.example.com'
```

## getJavaHttp
Returns the status of a Minecraft Java server using HTTP status code conventions.  
`200` is expected for Online and `404` is expected for Offline.
```js
const httpCode = await mcsrvstat.javaHttpCode('hostname.example.com');
console.log(httpCode);
// 200/404
```

## getBedrockHttp
Returns the status of a Minecraft Bedrock server using HTTP status code conventions.  
`200` is expected for Online and `404` is expected for Offline.
```js
const httpCode = await mcsrvstat.javaHttpCode('hostname.example.com');
console.log(httpCode);
// 200/404
```