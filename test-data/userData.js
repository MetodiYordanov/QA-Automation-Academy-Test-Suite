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
    username: "wrongUser",
    email: "wrongUser@mail.com",
    password: "",
    description: "empty password",
}, {
    username: "",
    email: "testMail@mail.com",
    password: "testPass123",
    description: "empty username",
},{
    username: "hackTester",
    email: "",
    password: "hackTester123",
    description: "empty email",
}, {
    username: "",
    email: "",
    password: "",
    description: "empty data user",
} ];