'reach 0.1'
export const main = Reach.App(() => {
    const Admin = Participant('Admin', {
        ready: Fun([], Null)
    })
    const Users = API('Users', {
        accounts: Fun([], Bool)
    })
    init()

    Admin.only(() => {
        interact.ready()
    })
    Admin.publish()

    const [num] =
        parallelReduce([0])
            .invariant(balance() == 0)
            .while(num <= 4)
            .api(Users.accounts,
                (k) => {
                    k(true);
                    return [num + 1];
                })

    commit()
})
