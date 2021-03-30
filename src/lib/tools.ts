export default class Tools
{
    sleep( ms : number )
    {
        return new Promise( (resolve) => {
            setTimeout( resolve, ms );
        });
    }
    
    waitForKeypress()
    {
        process.stdin.resume();
        
        return new Promise<void>( resolve => process.stdin.once('data', () => {
            process.stdin.pause();
            resolve();
        }));
    }
}
