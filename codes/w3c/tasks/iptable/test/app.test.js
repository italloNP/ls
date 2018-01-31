// testcafe chrome test1.js

import { Selector } from 'testcafe'

fixture('IP to Table Event')
    .page('../index.html')

test('Add IP', async t => {
    await t
        .typeText('#ip', '10.0.1.1')
        .typeText('#mask', '255.255.255.0')
        .typeText('#version', 'v4')
        .click('button')

    const addedIP = await Selector('table tbody tr:first-of-type td:first-of-type')

    await t
           .expect(addedIP.innerText).eql('10.0.1.1')
})

// TODO crud e variações, exibição do alert
