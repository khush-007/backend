import express from 'express';

const app = express();

//app.get('/',(req,res)=>{
 //   res.send('server is ready');
//});

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title: 'A joke',
            constent:'this is a joke'
        },
        {
            id:2,
            title: 'Another joke',
            constent:'this is another joke'
        },
        {
            id:3,
            title: 'A third joke',
            constent:'this is a third joke'
        },
        {
            id:4,
            title: 'A fourth joke',
            constent:'this is a fourth joke'
        },
        {
            id:5,
            title: 'A fifth joke',
            constent:'this is a fifth joke'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
});