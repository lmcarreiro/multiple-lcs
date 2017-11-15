import Sequence from "../src/Sequence";
import LCS      from "../src/LCS";

main();

function main() {
    try {
        testLCS();
    }
    catch (error) {
        console.log("\x1b[31m", `\n\n  Error: ${error}\n\n`);
        process.exit(1);
    }
}

function testLCS(): void
{
    const sequences = [
        "xaaabbbx",
        "aaaxxbbb",
        "xcccdddx",
        "cccxxddd"
    ];
    const expected = "xx";

    test(sequences, expected);
}

function test(sequences: string[], expectedLCS: string): void
{
    testWithSequences(sequences.map(str => str.split("")), expectedLCS.split(""));
}

function testWithSequences(sequences: Sequence[], expectedLCS: Sequence): void
{
    console.log("Sequences: ");
    console.log(sequences);

    let lcs = new LCS();
    let result = lcs.execute(sequences);

    console.log("LCS: ");
    console.log(result);
}
