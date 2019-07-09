function getMultipicationTable(start, end) {
    var result = "";
    if (!isValid(start, end))
        return null;
    else
        return result;
}

function isValid(start, end) {
    if (start <= end && start > 0 && end < 1000)
        return true;
    else
        return false;

}

module.exports = {
    getMultipicationTable,
}