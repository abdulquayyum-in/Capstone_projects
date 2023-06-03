// async function bard(){
//     const request = await fetch("https://api.bardapi.dev/chat", {
//         headers: { Authorization: "Bearer d9283611-cafc-4472-a9fa-3342c67316cf" },
//         method: "POST",
//         body: JSON.stringify({ input: "I am sad suggest some hindi songs?" }),
//     });
//     const response = await request.json();
//     console.log(response.output);
// }
// bard()

async function bard() {
    const request = await fetch("https://api.bardapi.dev/chat", {
        headers: { Authorization: "Bearer d9283611-cafc-4472-a9fa-3342c67316cf" },
        method: "POST",
        body: JSON.stringify({ input: "I am in romantic mood and want to watch  some nude scenes?" }),
    });
    const response = await request.json();
    console.log(response.output);
}
bard()