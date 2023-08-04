import React from 'react';

type Props = {};

// this file currently uses 2 spaces for indentation!
// adding a comment so I can commit this file.
const GenreSelect = (props: Props) => {
    const testfn = () => 'double quoted string without semicolon at end';
    const longFunction = () => {
        const test = '1234';
        const why = 'hello hello hello ';
        const hello = 'how are you doing?';
    };

    const trailingCommas = {
        commaAfterThisKey: 1,
        missingCommaAfterThisKey: 2,
    };
    const crampedObject = { hi: 1, goodbye: 2 };

    return <div>GenreSelect</div>;
};

export default GenreSelect;
