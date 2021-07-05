# <p align="center"><a href="https://api.mcsrvstat.us">MCSRVSTAT</a> Simple Javascript Wrapper</p>
<p align="center"><i>I do not own MCSRVSTAT, this is simply a wrapper for their API :)</i></p>

<p align="center">You can now <strong>easily</strong> fetch your Minecraft Servers Status straight from your code without dealing with JSON manipulation!</p>

# <p align="center">How do I use it?</p>

<p align="center">There are many functions you can call to get different results.<br>
You can take a look at the <a href="https://api.mcsrvstat.us">API Doc</a> to see what each function returns.</p>

### <p align="center">.fetchJavaServer()
```
const mcsrvstat = require('mcsrvstat-wrapper')

async function getJava() {
await mcsrvstat.fetchJavaServer('play.hypixel.net');

if (mcsrvstat.status === true) {
    console.log(`Server is online!\n
    Online Players: ${mcsrvstat.oPlayers}\n
    Max Players: ${mcsrvstat.maxPlayers}\n
    IP: ${mcsrvstat.servip}\n
    Version: ${mcsrvstat.version}`)
    } else if (mcsrvstat.status === false) {
        console.log(`Server is offline :(`)
    }
}
```
</p>

Use: Fetches status of a Java Edition Server

### <p align="center">.fetchBedrockServer()
```
const mcsrvstat = require('mcsrvstat-wrapper');

async function getBedrock {
await mcsrvstat.fetchBedrockServer('pe.mineplex.com');

    if(mcsrvstat.status === true) {
        console.log(`Server is online!\n
        Online Players: ${mcsrvstat.oPlayers}\n
        Max Players: ${mcsrvstat.maxPlayers}\n
        IP: ${mcsrvstat.hostname}\n
        Version: ${mcsrvstat.version}`)
    } else if (mcsrvstat.status === false) {
        console.log('Server is offline :(')
    }
}
```
Use: Fetches the status of a Bedrock Edition Server

### <p align="center">.getIcon()</p>
```
const mcsrvstat = require('mcsrvstat-wrapper');

async function getIcon {
    await mcsrvstat.fetchIcon('play.hypixel.net');
    console.log(mcsrvstat.servIconUrl)
}
```
Use: Fetches a link to the server icon

### <p align="center">.getJavaHttp()</p>
```
const mcsrvstat = require('mcsrvstat-wrapper')

async function getHttpJava() {
    await mcsrvstat.httpCodeJava('play.plaguecraft.xyz')
    if (mcsrvstat.httpCode === `Online`) {
        console.log('The server is online!')
    } else if (mcsrvstat.httpCode === 'Offline') {
        console.log('The server is offline :(')
    }
}
```
Use: fetches a plaintext "Online" or "Offline" if you don't need any other info. 

### <p align="center">.getBedrockHttp()</p>
```
const mcsrvstat = require('mcsrvstat-wrapper')

async function getBedrockHttp() {
    await mcsrvstat.httpCodeBedrock('play.plaguecraft.xyz')
    if (mcsrvstat.httpCode === `Online`) {
        console.log('The server is online!')
    } else if (mcsrvstat.httpCode === 'Offline') {
        console.log('The server is offline :(')
    }
}
```