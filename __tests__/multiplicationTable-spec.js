const multipicationTable = require('../multiplicationTable');

it('should return null when invoke getMultipicationTable given start bigger than end', () => {
    // given
    const start = 4;
    const end = 2;
    // when
    const result = multipicationTable.getMultipicationTable(start, end);
    // then
    expect(result).toBe(null);

});