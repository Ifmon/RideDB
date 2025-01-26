import { fetchData } from './utils/fetchData';
import { parseCsv } from './utils/parseCsv';
import generateRegionsDB from './generateRegionsDB';

(async () => {
    const url: string = "https://raw.githubusercontent.com/MobilityData/gbfs/refs/heads/master/systems.csv";

    try {
        const csvData: string = await fetchData(url);
        const regionsOperators = parseCsv(csvData);
        const regionsDB = await generateRegionsDB(regionsOperators);
    } catch (error) {
        console.error("An error occurred:", error);
    }
})();
