cont express=require('express');
const app= express();
const path=require.('path');

app.use(express.static('./dist/omdb'));
app.listen(process.env.PORT || 8080);

app.get('/*', function(res,req){
	res.sendFile(path.join(__dirname+'/dist/omdb/index.html'));
})