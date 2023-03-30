const axios = require('axios');
const baseUrl = "https://api.mcsrvstat.us/";

async function fetchJavaServer(ip) {
    if (!ip) throw new Error("IP not supplied");
    else {
        return await axios(baseUrl + `2/${ip}`).then((response) => {
            return {
                status: response.data.online,
                version: response.data.version,
                players: response.data.players,
                connection: {
                    ip: response.data.ip,
                    hostname: response.data.hostname
                }
            }
        }).catch((e) => {
            throw new Error(`Failed to fetch '${ip}'`)
        })
    }
}

async function fetchBedrockServer(ip) {
    if (!ip) throw new Error("IP not supplied");
    return await axios(baseUrl + `bedrock/2/${ip}`).then((response) => {
        return {
            status: response.data.online,
            version: response.data.version,
            players: response.data.players,
            connection: {
                ip: response.data.ip,
                hostname: response.data.hostname
            }
        }
    }).catch((e) => {
        throw new Error(`Failed to fetch '${ip}'`)
    })
}

async function fetchIcon(ip) {
    return `https://api.mcsrvstat.us/icon/${ip}`;
}

async function javaHttpCode(ip) {
    try {
        return await axios(baseUrl + `simple/${ip}`).then((response) => {
            return response.status;
        }).catch((e) => {
            throw new Error(`Failed to fetch '${ip}'`)
        })
    } catch(err) {
        throw new Error(`Failed to fetch '${ip}' status code`)
    }
}

const bedrockHttpCode = async function(ip) {
    try {
        return await axios(baseUrl + `bedrock/simple/${ip}`).then((response) => {
            return response.status;
        }).catch((e) => {
            throw new Error(`Failed to fetch '${ip}'`)
        })
    } catch(err) {
        throw new Error(`Failed to fetch '${ip}' status code`)
    }
}

module.exports = {fetchJavaServer, fetchBedrockServer, fetchIcon, javaHttpCode, bedrockHttpCode}