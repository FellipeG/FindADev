module.exports = (phrase) => {
    return phrase.split(',').map(word => word.trim())
}