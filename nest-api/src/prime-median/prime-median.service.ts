import { Injectable } from '@nestjs/common';

@Injectable()
export class PrimeMedianService {

    /**
     * Algorithm courtesy of https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
     *
     */
    generatePrimesInRange(max: number): number[] {
        let sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
    }

    findMedianValues(primes: number[]): number[] {

        if(primes.length === 0) throw new Error('No primes available');

        let center = Math.floor(primes.length / 2);

        return primes.length % 2 === 0 ? [
            primes[center - 1],
            primes[center]
        ]: [
            primes[center]
        ];
    }

    getMedianValues(max: number): number[] {
        const primes = this.generatePrimesInRange(max);
        const medianValues = this.findMedianValues(primes);
        return medianValues;
    }

}
