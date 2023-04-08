const axios = require('axios');
const baseUrl = "https://api.mcsrvstat.us/";

async function fetchJavaServer(ip) {
    if (!ip) throw new Error("Minecraft Java IP not supplied");
    else {
        return axios(baseUrl + `2/${ip}`).then((response) => {
            return {
                online: response.data.online,
                version: response.data.version,
                players: response.data.players,
                connection: {
                    ip: response.data.ip,
                    hostname: response.data.hostname || null
                }
            }
        }).catch((e) => {
            throw new Error(`Failed to fetch '${ip}'`, {cause:e})
        })
    }
}

async function fetchBedrockServer(ip) {
    if (!ip) throw new Error("Minecraft Bedrock IP not supplied");
    return axios(baseUrl + `bedrock/2/${ip}`).then((response) => {
        return {
            online: response.data.online,
            version: response.data.version,
            players: response.data.players,
            connection: {
                ip: response.data.ip,
                hostname: response.data.hostname || null
            }
        }
    }).catch((e) => {
        throw new Error(`Failed to fetch '${ip}'`, {cause:e})
    })
}

async function fetchIcon(ip) {
    return `https://api.mcsrvstat.us/icon/${ip}`;
}

async function javaHttpCode(ip) {
    return axios(baseUrl + `simple/${ip}`).then((response) => {
        return response.status;
    }).catch((e) => {
        if (e.toJSON && e.toJSON().status === 404) return 404;
        else throw new Error(`An unexpected status code/error was received while fetching '${ip}'`, {cause:e})
    })
}

const bedrockHttpCode = async function(ip) {
    return axios(baseUrl + `bedrock/simple/${ip}`).then((response) => {
        return response.status;
    }).catch((e) => {
        if (e.toJSON && e.toJSON().status === 404) return 404;
        else throw new Error(`An unexpected status code/error was received while fetching '${ip}'`, {cause:e})
    })
}

module.exports = {fetchJavaServer, fetchBedrockServer, fetchIcon, javaHttpCode, bedrockHttpCode}