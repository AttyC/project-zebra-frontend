const GenreSelect = () => {
    const testfn = () => 'no semicolon at end '
    const longString =
        'this string is over 85 characters long askfdjhaksl dfhasdhjflkv ajsbdlkajbdgkls bjkajsdklfhalksdjfhaklsjdhfa lksjdfklahsdfk jashdlkajhdkahjdflj';

    const trailingCommas = {
        test: 1,
        missingComma: 2
    }

    return (
        <div>
            bad intendation
            {testfn()}
            {longString}
        </div>
    );
};

export default GenreSelect;
