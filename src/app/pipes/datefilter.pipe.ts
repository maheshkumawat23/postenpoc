import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'datefilter'
})
export class DateFilterPipe implements PipeTransform {
    /**
     * Filter the data and returns the data between two dates
     * @{params: items} - Array of data
     * @{params: from} - from date 
     * @{params: to} - to date
     */
    transform(items: any[], from: any, to: any): any[] {
        console.log(from);
        console.log(to);
        if (!items) return [];
        if (!from || !to) return items;
        let fromDate = new Date(from);
        let toDate = new Date(to);
        let filteredDates = [];
        let row, date;
        for (let i in items) {
            row = items[i];
            date = new Date(row.date);
            //comparing dates
            if (date.getTime() >= fromDate && date.getTime() <= toDate) {
                filteredDates.push(row);
            }
        }
        if(filteredDates.length==0){
            return [-1]
        }
        return filteredDates;
    }
}