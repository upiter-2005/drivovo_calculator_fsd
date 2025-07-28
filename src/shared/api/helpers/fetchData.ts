/* eslint-disable @typescript-eslint/no-unused-vars */

type DrivovoResponse<T> = {
    data: T | null,
    error: string | null
}

export async function fetchData <T>(endpoint: string, options?: RequestInit ): Promise<DrivovoResponse<T>> {
    try {
        const data: T = await fetch(endpoint, options).then(res => res.json());
        return {data, error: null}
    } catch (error: unknown ) {
        return {data: null, error: "Error!"}
    }
}