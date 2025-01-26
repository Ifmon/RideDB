import * as Papa from 'papaparse';
import { RegionOperator } from '../models/RegionOperator';

export function parseCsv(csvData: string): RegionOperator[] {
    const parsed = Papa.parse<RegionOperator>(csvData, {
        header: true,
        dynamicTyping: true
    });
    return parsed.data;
}
