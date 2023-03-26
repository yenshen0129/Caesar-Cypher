function caesarCypher(secret, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let encrypted = "";
    for (let i = 0; i < secret.length; i++) {
        const char = secret[i];
        if (char === " ") {
            encrypted += " ";
        } else {
            const index = (alphabet.indexOf(char) + shift) % 26;
            encrypted += alphabet[index];
        }
    }
    return encrypted;
}

describe("Caesar Cypher", () => {
    it("is a function?", () => {
        expect(typeof caesarCypher).toEqual("function");
    });

    it("rotates a letter by the number passed in", () => {
        let returnedValue = caesarCypher("a", 2);
        expect(returnedValue).toEqual("c");
    });

    it("rotates every letter in the string by the supplied letter", () => {
        let returnedValue = caesarCypher("doggo", 7);
        expect(returnedValue).toEqual("kvnnv");
    });

    it("wraps around to the beginning of the alphabet when necessary", () => {
        let returnedValue = caesarCypher("hello", 13);
        expect(returnedValue).toEqual("uryyb");
    });

    it("retains spaces between encrypter world", () => {
        let returnedValue = caesarCypher("hello world", 13);
        expect(returnedValue).toEqual("uryyb jbeyq");
    });
});
