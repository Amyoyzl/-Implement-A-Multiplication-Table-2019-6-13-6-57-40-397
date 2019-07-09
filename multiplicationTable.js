function getMultipicationTable(start, end) {
    var multipicationTable = "";
    if (!isValid(start, end))
        return null;
    else {
        for (let i = start; i <= end; i++) {
            for (let j = start; j <= i; j++) {
                multipicationTable += `${j}*${i}=${i*j}\t`;
            }
            multipicationTable += "\n";
        }
        return multipicationTable;
    }
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