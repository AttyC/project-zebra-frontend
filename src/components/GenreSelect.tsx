import React from 'react'

type Props = {}

const GenreSelect = (props: Props) => {
  const testfn = () => 'no semicolon at end '
  const longString =
    'this string is over 85 characters long askfdjhaksl dfhasdhjflkv ajsbdlkajbdgkls bjkajsdklfhalksdjfhaklsjdhfa lksjdfklahsdfk jashdlkajhdkahjdflj'

  const trailingCommas = {
    test: 1,
    missingComma: 2,
  }
  const test = 'test component';

  return (
    <div>GenreSelect

    </div>
  )
}

export default GenreSelect