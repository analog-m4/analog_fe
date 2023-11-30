let remote = process.env.VERCEL_URL;

if (remote) {
    console.log(`Testing against remote url: ${remote}.`);
} else {
    console.log('Testing locally only.');
}
