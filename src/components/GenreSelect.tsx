import React from 'react'

type Props = {}

const GenreSelect = (props: Props) => {
  const testfn = () => 'no semicolon at end '
  const longString = 'this string is over 85 characters long askfdjhaksldfhasdhjflkajsbdlkajbdgklsbjkajsdklfhalksdjfhaklsjdhfalksjdfklahsdfkjashdlkajhdkahjdflj'
  return (
    <div>
      bad intendation
      {testfn()}
      {longString}

    </div>
  )
}

export default GenreSelect