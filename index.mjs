import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

const accAdmin = await stdlib.newTestAccount(startingBalance);
const user1 = await stdlib.newTestAccount(startingBalance)
const user2 = await stdlib.newTestAccount(startingBalance)
const user3 = await stdlib.newTestAccount(startingBalance)
const user4 = await stdlib.newTestAccount(startingBalance)
const user5 = await stdlib.newTestAccount(startingBalance)
const user6 = await stdlib.newTestAccount(startingBalance)

const ctcWho = (acc) =>
    acc.contract(backend, ctcAdmin.getInfo());
const ctcAdmin = accAdmin.contract(backend);


const accounts = async (who) => {
    try {
        const acc = who.getAddress()
        const ctc = ctcWho(who);
        await ctc.apis.Users.accounts();
        console.log(`Account ${acc} has successfully connected`);
    } catch (error) {
        console.log('Sorry we are at full capacity');
    }
}

await Promise.all([
    ctcAdmin.p.Admin({
        ready: () => {
            console.log('Admin is ready to accept connections')
        },
    }),
    await accounts(user1),
    await accounts(user2),
    await accounts(user3),
    await accounts(user4),
    await accounts(user5),
    await accounts(user6),
    console.log('End of program'),
    process.exit()
]);
