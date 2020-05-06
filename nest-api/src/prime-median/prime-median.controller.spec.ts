import { Test, TestingModule } from '@nestjs/testing';
import { PrimeMedianController } from './prime-median.controller';
import {PrimeMedianService} from "./prime-median.service";

describe('PrimeMedian Controller', () => {
  let controller: PrimeMedianController;
  let primeMedianSrv: PrimeMedianService;

  beforeEach(async () => {

    primeMedianSrv = new PrimeMedianService();
    controller = new PrimeMedianController(primeMedianSrv);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  describe('primeMedian', () => {

    it('should return an array of median values', async () => {
      const result = [3, 4];
      jest.spyOn(primeMedianSrv, 'getMedianValues').mockImplementation(() => result);

      expect(await controller.primeMedian(10)).toBe(result);
    });

  });

});
