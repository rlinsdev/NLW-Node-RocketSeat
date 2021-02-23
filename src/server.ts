import express from 'express';

const app = express();

app.get('/',(req, res, next) =>{
    return res.json({message: 'teste!'})
})

app.post('/',(req, res, next) =>{
    return res.json({message: 'Registro salvo com sucesso!'})
})

app.listen(4545,() => console.log('server running'));