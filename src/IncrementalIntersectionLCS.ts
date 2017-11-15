import BaseLCS from "./BaseLCS";
import Sequence from "./Sequence";
import intersection from './intersection';

export default class IncrementalIntersectionLCS extends BaseLCS
{
    protected executeForMoreThanThree(sequences: Sequence[]): Sequence
    {
        const lengthBiggerSequence = Math.max(...sequences.map(s => s.length));

        for (let i = 1; i <= lengthBiggerSequence; i++) {
            const seqIntersection = intersection(sequences.map(s => s.slice(0, i)));

            if (seqIntersection.size) {
                const intersectionValue = seqIntersection.values().next().value;
                const sequencesAfterValue = sequences.map(s => s.slice(s.indexOf(intersectionValue) + 1));
                return [intersectionValue, ...this.execute(sequencesAfterValue)];
            }
        }

        return [];
    }
}