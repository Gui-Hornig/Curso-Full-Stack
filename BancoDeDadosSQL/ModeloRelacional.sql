/*os dados tem relacoes entre eles, a partir do cadastro de um "pessoa" voce pode ter acesso aos dados relacionados a pessoa*/

/*Entidade = Curso
  Atributos = Idcurso
              nome 
              descricao 
              carga 
              ano*/
/*No modelo rlaciona pode se fazer ligacoes entre esses atributos*/

/*Chave primaria = CPF, ID * /

/*Cardinalidade = modelo maxima, cada 'aluno' pode assistir varios cursos\
a Cardinalidade classifica um 'Relacionamento' */

/*Modelos de classificao: 
Um pra um
um pra muitos
muitos pra muitos*/

/*Chaves primarias: identificas as duplas
Chaves estrangeira: E umas chave primaria que veio de outro lugar
* Criar relacionamento em tabelas basicamente e fazer uma troca de chaves 
*/


Relacionamento 'Um pra um' : pode juntar, definindo uma 'Entidade dominante' e trasnferindo a chave primaria do outro. Os atributos precisao ser os mesmo
Relacionamento 'Um pra muitos : Pega a chave primaria do lado UM e joga no lado MUITOS como chave estrangeira
Relacionamentto 'Muitos pra Muitos' : O relacionamento vira uma ENTIDADE com seus atributos e cria 2 'mini relacionamentos' com suas cardinalidades. Dessa forma vira um relacionamento UM para MUITOS, entao e so pegar a chave primaria de UM e passar para MUITOS
