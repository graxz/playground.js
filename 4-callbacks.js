const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('Isso é um erro!', undefined)
        callback(undefined, 'Isso é um acerto!')
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})