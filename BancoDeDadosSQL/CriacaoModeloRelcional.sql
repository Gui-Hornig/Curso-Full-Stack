InnoDB e uma 'Engine' um mecanismo que suporta chaves estrangeiras
MyISAM -> nao da suporte as 4 regra principais para uma BOA transacao
XtraDB  
todas sao 'Engine' 

ACID
A = Atomicidade, nao pode ser dividida em subtarefas ou tudo acontece ou nada e considerado 
C = Consistencia, se antes de fazer a transacao estava OK, depois da transacao precisa estar OK
I = isolamento, quando tem duas transacaoes, elas precisao ser de modo isolado sem afetar a outra
D = Durabilidade, precisa ter os dados salvos o tempo necessario nao pode perder dados