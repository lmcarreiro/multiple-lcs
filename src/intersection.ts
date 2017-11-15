import Sequence from "./Sequence";

export default function intersection(sequences: Sequence[]): Set<string>
{
    const distinctValuesPerSequence = sequences.map(s => new Set(s));

    let smallerSet = distinctValuesPerSequence[0];
    distinctValuesPerSequence.forEach(s => smallerSet = s.size < smallerSet.size ? s : smallerSet);

    return new Set([...smallerSet].filter(e => distinctValuesPerSequence.every(s => s.has(e))));
}
