(() => {
    const fullName = (firstName:string, lastName:string) => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Tony','Stark');

    console.log({name});
})()
