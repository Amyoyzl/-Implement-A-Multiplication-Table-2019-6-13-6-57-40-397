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

it('should return a multiplication table when invoke getMultipicationTable given start is 3 and end is 5', () => {
    // given
    const start = 3;
    const end = 5;
    // when
    const result = multipicationTable.getMultipicationTable(start, end);
    // then
    expect(result).toBe("3*3=9\t\n3*4=12\t4*4=16\t\n3*5=15\t4*5=20\t5*5=25\t\n");

});