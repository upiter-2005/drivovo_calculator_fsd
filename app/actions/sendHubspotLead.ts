'use server';

export async function sendHubspotLead(formData: FormData) {
  const portalId = process.env.HUBSPOT_PORTAL_ID!;
  const formGuid = process.env.HUBSPOT_FORM_GUID!;
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

  const payload = {
    fields: [
      { name: 'firstname', value: formData.get('firstname') },
      { name: 'email', value: formData.get('email') },
      { name: 'phone', value: formData.get('phone') },
      { name: 'driving_birthday', value: formData.get('driving_birthday') },//Досвід/навичка водіння
      { name: 'social_link', value: formData.get('social_link') },//Посилання на твій особистий LinkedIn, Instagram а
      { name: 'date_birthday', value: formData.get('date_birthday') },//Коли буде зручно розмовляти з менеджером?
      { name: 'time_birthday', value: formData.get('time_birthday') },//В який час краще дзвонити?
      { name: 'coffe_birthday', value: formData.get('coffe_birthday') },//Кава/чай?
      { name: 'url', value: formData.get('url') },

    ],
    context: {
      pageUri: `https://drivovo.com/${formData.get('url')}`,
      pageName: 'Car Page',
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HubSpot error: ${err}`);
  }

  return await res.json();
}
