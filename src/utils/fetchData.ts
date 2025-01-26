import fetch, { Response } from 'node-fetch';

export async function fetchData(url: string): Promise<string> {
    const response: Response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch response: ${response.statusText}`);
    }
    return response.text();
}
