import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'startEndDate'
})
export class StartEndDatePipe implements PipeTransform {

  transform(startDate: any, endDate: any): string {
    if (startDate && endDate) {
      const start = moment(startDate).format('01');
      const end = moment(endDate).format('DD MMMM, YYYY');
      return start + ' - ' + end;
    }
    return '';
  }

}
