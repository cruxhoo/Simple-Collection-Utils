import * as CollectionUtils from '../src/collectionUtils';


describe('tests suite for the list utils utility', () => {
    it('Should catch an empty or null list', () => {
        const nullList = null;
        expect(CollectionUtils.isEmptyList(nullList)).toEqual(true);

        // @ts-ignore
        const undefinedList: string[];
        // @ts-ignore
        expect(CollectionUtils.isEmptyList(undefinedList)).toEqual(true);

        const emptyList: any = [];
        expect(CollectionUtils.isEmptyList(emptyList)).toEqual(true);

        const listWithElements = [1, 2, 3, 4];
        expect(CollectionUtils.isEmptyList(listWithElements)).toEqual(false);
    });

    it('Should validate not empty list', () => {
        const nullList = null;
        expect(CollectionUtils.isNotEmptyList(nullList)).toEqual(false);

        const undefinedList = undefined;
        expect(CollectionUtils.isNotEmptyList(undefinedList)).toEqual(false);

        const emptyList: any = [];
        expect(CollectionUtils.isNotEmptyList(emptyList)).toEqual(false);

        const listWithElements = [1, 2, 3, 4];
        expect(CollectionUtils.isNotEmptyList(listWithElements)).toEqual(true);
    });

    it('should validate for empty strings', () => {
        const nullString = null;
        expect(CollectionUtils.isEmptyString(nullString)).toEqual(true);

        const undefinedString = undefined;
        expect(CollectionUtils.isEmptyString(undefinedString)).toEqual(true);

        const emptyString = '';
        expect(CollectionUtils.isEmptyString(emptyString)).toEqual(true);

        const notEmptyString = 'Fastest hands in Ireland, u guess whom....';
        expect(CollectionUtils.isEmptyString(notEmptyString)).toEqual(false);
    });

    it('should validate for blank strings', () => {
        const blankString = ' ';
        expect(CollectionUtils.isBlankString(blankString)).toEqual(true);

        const superBlankString = '        ';
        expect(CollectionUtils.isBlankString(superBlankString)).toEqual(true);

        const stringAsBenWhite = '        ';
        expect(CollectionUtils.isBlankString(stringAsBenWhite)).toEqual(true);

        const notBlankString = '   😄  ';
        expect(CollectionUtils.isBlankString(notBlankString)).toEqual(false);
    });
});

describe('Test for the object utilities', () => {
    it('Should validate if a path exist on an object', () => {
        const object = {
            a: {
                b: {
                    c: 'hello'
                }
            }
        };

        const result = CollectionUtils.pathExistsInObject('a.b.c', object);
        expect(result).toBeTruthy();
    });

    it('should fail on non existing path', function () {
        const object = {
            a: {
                b: {
                    c: 'hello'
                }
            }
        };

        const result = CollectionUtils.pathExistsInObject('a.b.c.d', object);
        expect(result).toBeFalsy();
    });
});
