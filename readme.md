# <p align="center"><a href="https://api.mcsrvstat.us">MCSRVSTAT</a> Simple Javascript Wrapper</p>
<p align="center"><i>I do not own MCSRVSTAT, this is simply a wrapper for their API :)</i></p>

<p align="center">
<a href="https://npmjs.com/package/mcsrvstat-wrapper"><img src="https://nodei.co/npm/mcsrvstat-wrapper.png?downloads=true&downloadRank=true&stars=true"></a>

Easily fetch the status of a Minecraft server (Java or Bedrock) all from Node!

# <p align="center">How do I use it?</p>

<p align="center">There are many functions you can call to get different results.<br>
You can take a look at the <a href="https://api.mcsrvstat.us">API Doc</a> to see what each function returns.</p>

### fetchJavaServer
Fetch the status of a Minecraft Java server
```js
const serverInfo = await fetchJavaServer('hostname.example.com');
console.log(serverInfo);
// { status: true, version: 'Requires MC 1.8 / 1.19', players: { online: 5, max: 20 }, connection: { ip: 'xxx.xxx.xxx.xxx', hostname: 'hostname.example.com' } }
```

### fetchBedrockServer
Fetch the status of a Minecraft Bedrock server
```js
const serverInfo = await fetchBedrockServer('hostname.example.com');
console.log(serverInfo);
// { status: true, version: 'x.xx.xx', players: { online: 5, max: 20 }, connection: { ip: 'xxx.xxx.xxx.xxx', hostname: 'hostname.example.com' } }
```

### fetchIcon
Generates a link to the servers icon
```js
    let url = await mcsrvstat.fetchIcon('play.hypixel.net');
    console.log(url)
```

### getJavaHttp
Returns the status of a Minecraft Java server using a HTTP status code
```js
const httpCode = await mcsrvstat.javaHttpCode('hostname.example.com');
console.log(httpCode);
// 200
```

### getBedrockHttp
Returns the status of a Minecraft Bedrock server using a HTTP status code
```js
const httpCode = await mcsrvstat.javaHttpCode('hostname.example.com');
console.log(httpCode);
// 200
```