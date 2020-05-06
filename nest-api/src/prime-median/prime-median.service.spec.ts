import { Test, TestingModule } from '@nestjs/testing';
import { PrimeMedianService } from './prime-median.service';

describe('PrimeMedianService', () => {
  let service: PrimeMedianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrimeMedianService],
    }).compile();

    service = module.get<PrimeMedianService>(PrimeMedianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate primes less than ten', () => {
    const primes = service.generatePrimesInRange(10);
    const primesUnderTen = [2, 3, 5, 7];
    expect(primes).toEqual(primesUnderTen);
  });

  it('should return an empty array', () => {
    expect(service.generatePrimesInRange(0)).toEqual([]);
  });

  it('should return array of the center two values', () => {
    expect(service.findMedianValues([1,2,3,4,5,6])).toEqual([3,4]);
  });

  it('should return an array of one value, center of array', () => {
    expect(service.findMedianValues([1,2,3,4,5,6,7])).toEqual([4]);
  });

  it('should throw an error when argument is empty array', () => {
    try {
      service.findMedianValues([]);
    }catch (e) {
      expect(e.message).toEqual('No primes available');
    }

  });

  it('should return median values when max is ten', () => {
    expect(service.getMedianValues(10)).toEqual([3,5]);
  });

  it('should return median value when max is 18', () => {
    expect(service.getMedianValues(18)).toEqual([7]);
  });

});
