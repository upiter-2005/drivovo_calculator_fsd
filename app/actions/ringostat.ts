// app/components/actions.ts
'use server'

export async function callRingostat(phone: string) {
  try {

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Auth-key': process.env.RINGOSTAT_TOKEN || ''
      },
      body: new URLSearchParams({extension: '380731007395', destination: `38${phone}`})
    };

    const res = await fetch('https://api.ringostat.net/callback/outward_call', options)

    const data = await res.json()

    return {
      success: res.ok,
      data,
    }
  } catch (e) {
    console.error('Ringostat error:', e)
    return { success: false, error: e }
  }
}
