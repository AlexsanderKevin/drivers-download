export default async function apiTest() {
    console.log('api test');

    const api = await fetch('https://supportapi.lenovo.com/v2.5/Content/driver');
    const body = await api.json();
    console.log(api);
    console.log(body);
}
