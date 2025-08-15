/* eslint-disable @typescript-eslint/no-explicit-any */
export const fbq = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq(...args)
  }
}
