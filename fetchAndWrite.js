const https = require('https');
const fs = require('fs');

const url = 'https://mocki.io/v1/ccc34c34-7662-47a6-8c4f-37d41c006417';
const outputFilePath = './output.json';

https.get(url, (res) => {
    let data = '';

    // Collect data chunks
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Write data to file once fully received
    res.on('end', () => {
        fs.writeFile(outputFilePath, data, (err) => {
            if (err) {
                console.error('Error writng to file:', err);
            } else {
                console.log('Data successfully written, and can be fund hre', outputFilePath);
            }
        });
    });
}).on('error', (err) => {
    console.error('Error fetching data:', err);
});