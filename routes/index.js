exports.index = function(req,res){
    res.render('index');
};

exports.lista = function(req,res){
  res.json({
      titulo : 'Guamgues de nova york',
      diretor : 'Martin Scorsee',
      ano : 2002

  })
}

  exports.grava = function(req,res){
    var filme = req.body;
    res.send('Filme' + filme.titulo + 'recebido do servidor')
};
