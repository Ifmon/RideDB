import { RegionOperator } from './models/RegionOperator';
import { Region } from './models/Region';
import {normalizeCityName} from "./utils/normalizeCityName";
import * as fs from 'fs';
import * as path from 'path';

async function generateRegionsDB(regionsOperators: RegionOperator[]) {
    const regions: { [key: string]: { [key: string]: Region } } = {};

    for (const region of regionsOperators) {
        if (!region["Country Code"]) {
            console.warn(`Country Code is undefined for region: ${JSON.stringify(region)}`);
            continue;
        }

        const countryCode = region["Country Code"].toLowerCase();

        const location = region.Location;

        if (!location) {
            console.warn(`Location is undefined for region: ${JSON.stringify(region)}`);
            continue;
        }

        const cleanedLocation = normalizeCityName(location);

        if (!regions[countryCode]) {
            regions[countryCode] = {};
        }

        if (!regions[countryCode][cleanedLocation]) {
            regions[countryCode][cleanedLocation] = { operators: [] };
        }

        regions[countryCode][cleanedLocation].operators.push({
            name: region["System ID"],
            gbfs_url: region["Auto-Discovery URL"],
        });
    }

    for (const countryCode in regions) {
        for (const location in regions[countryCode]) {
            const filePath = path.join(__dirname, `../data/${countryCode}/${location}/operators.json`);
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
            fs.writeFileSync(filePath, JSON.stringify(regions[countryCode][location].operators, null, 2));
        }
    }

    return regions;
}

export default generateRegionsDB;
