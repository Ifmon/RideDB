export function normalizeCityName(location: string): string {
    // Delete SUFFIX LIKE NY, FR, BE, ...
    let cleanedLocation = location.replace(/,\s[A-Z]+/g, '').trim()
    cleanedLocation = cleanedLocation.toLowerCase();

    //delete é, à, ... from french cities
    cleanedLocation = cleanedLocation.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    cleanedLocation = cleanedLocation.replace(/\s+/g, '_');

    cleanedLocation = cleanedLocation.replace(/-/g, '_');

    cleanedLocation = cleanedLocation.replace(/[^a-z_]/g, '');

    return cleanedLocation;
}
