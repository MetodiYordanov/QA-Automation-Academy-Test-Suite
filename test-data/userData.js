export const validUsers = [ {
    username: "MnogoGotin",
    email: "mnogo.gotin@mail.com",
    password: "mnogoGotin123",
}, {
    username: "Buginator",
    email: "buginator1@mail.com",
    password: "Buginator1",
}, {
    username: "Banichko",
    email: "banichko@yahoo.com",
    password: "Banichko123",
} ];

export const invalidUsers = [ {
    username: "Use",
    email: "wrongUser@mail.com",
    birthDate: "1986-02-23",
    password: "testUser123",
    publicInfo: "short username - registration",
}, {
    username: "tooLongUsernameToEnter",
    email: "wrongUser@mail.com",
    birthDate: "1992-05-12",
    password: "testUser123",
    publicInfo: "long username - registration",
}, {
    username: "hackTester",
    email: "hackTester@mail.com",
    birthDate: "1975-10-17",
    password: "hack",
    publicInfo: "short password - registration",
}, {
    username: "thePassMaster",
    email: "passMaster@mail.com",
    birthDate: "2000-03-21",
    password: "thepassmaster123",
    publicInfo: "no uppercase password - registration",
} ];