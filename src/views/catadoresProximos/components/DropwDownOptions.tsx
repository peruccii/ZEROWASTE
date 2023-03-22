import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 1, text: 'Jandira', value: 1 },
    { key: 2, text: 'Barueri', value: 2 },
    { key: 3, text: 'Itapevi', value: 3 },
]

const DropDownOptions = () => {
    return (
        <Dropdown clearable options={options} selection />
    )

}

export default DropDownOptions

