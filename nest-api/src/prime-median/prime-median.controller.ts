import {Controller, Get, HttpException, HttpStatus, Param} from '@nestjs/common';
import {PrimeMedianService} from "./prime-median.service";

@Controller('prime-median')
export class PrimeMedianController {

    constructor(private primeMedianService: PrimeMedianService) {}

    @Get(':upperLimit')
    primeMedian(@Param() params) {

        try {
            return this.primeMedianService.getMedianValues(params.upperLimit);
        }catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Error processing maximum prime',
            }, HttpStatus.BAD_REQUEST);
        }

    }
}
