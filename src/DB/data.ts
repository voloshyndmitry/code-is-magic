export default {
    get urls(){
        return _urls
    },
    set urls(data: any) {
        new Error('Object urls has read only permissions')
    }
}

const _urls =  [
    {
        "id": "DP1L1",
        "title": "Nodejs: Hello world",
        "description": "How to build simple Nodejs application.",
        "url": "https://github.com/voloshyndmitry/code-is-magic/"
    },
    {
        "id": "LP1L1",
        "title": "Nodejs: Hello world",
        "description": "How to build simple Nodejs application.",
        "url": "https://github.com/voloshyndmitry/code-is-magic/"
    },
    {
        "id": "MP1L1",
        "title": "Nodejs: Hello world",
        "description": "How to build simple Nodejs application.",
        "url": "https://github.com/voloshyndmitry/code-is-magic/"
    }
]