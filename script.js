function letsDance(danceStyle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (danceStyle.toLowerCase() === 'polka') {
                resolve('Yes, polka is my thing!');
            } else {
                reject('Not even if a pandemic roamed the earth.');
            }
        }, 2000);
    });
}

// Exempel på hur man använder funktionen
letsDance('polka')
    .then(response => console.log(response))
    .catch(diss => console.log(diss));

letsDance('waltz')
    .then(response => console.log(response))
    .catch(diss => console.log(diss));
