const fetch = require('node-fetch')

const fetchJavaServer = async function(ip) {
    var url = `https://api.mcsrvstat.us/2/${ip}`

    try {
        const data = await fetch(url).then(response => response.json())
        // console.log(data)

        // Define vars for external use
        module.exports.status = data.online;
        module.exports.oPlayers = data.players.online;
        module.exports.maxPlayers = data.players.max;
        module.exports.servip = data.ip;
        module.exports.version = data.version;
        module.exports.hostname = data.hostname;
    }
    catch(err) {
        return console.error(`Error fetching status of ${ip}.\n${err}`)
    }
}

const fetchBedrockServer = async function(ip) {
    var url = `https://api.mcsrvstat.us/bedrock/2/${ip}`;

    try {
        const data = await fetch(url).then(response => response.json())

        // Define vars for external use
        module.exports.oPlayers = data.players.online;
        module.exports.maxPlayers = data.players.max;
        module.exports.version = data.version;
        module.exports.status = data.online;
        module.exports.servip = data.ip;
        module.exports.hostname = data.hostname;
    }
    catch(err) {
        return console.error(`Error fetching status of ${ip}.\n`, err)
    }
}

const fetchIcon = async function(ip, err) {
    var url = `https://api.mcsrvstat.us/icon/${ip}`
    module.exports.servIconUrl = url 
    if(err) {
        return console.error(`Error fetching icon of ${ip}.\n`, err)
    }
}

const httpCodeJava = async function(ip) {
    var url = `https://api.mcsrvstat.us/simple/${ip}`
    try {
        const data = await fetch(url).then(response => response.text())

        module.exports.httpCode = data;
    }
    catch(err) {
        return console.error(`Error fetching HTTP Code of ${ip}\n`, err)
    }
}

const httpCodeBedrock = async function(ip) {
    var url = `https://api.mcsrvstat.us/bedrock/simple/${ip}`

    try {
        const data = await fetch(url).then(response => response.text())

        module.exports.httpCode = data;
    }
    catch(err) {
        return console.error(`Error fetching HTTP code of ${ip}.\n`, err)
    }
}

module.exports = {fetchJavaServer, fetchBedrockServer, fetchIcon, httpCodeJava, httpCodeBedrock}