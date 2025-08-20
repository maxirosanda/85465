import {options} from './utils/commander.js'
import config from './utils/config.js'
import { faker } from '@faker-js/faker';

const users = []

for(let i = 0; i < 1000 ; i++){

    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    const user = {
        firstName,
        lastName,
        jobTitle:faker.person.jobTitle(),
        birthdate:faker.date.birthdate({ mode: 'age', min: 18, max: 65 }),
        email:faker.internet.email({ firstName, lastName }),
        password:faker.internet.password({ length: 20 }),
        picture:faker.image.avatar()
    }
    users.push(user)
}

console.log(users)

