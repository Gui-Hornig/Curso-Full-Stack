/* Relacionamento muitos pra Muitos
A chave estrangeira precisa ser do mesmo tipo da chave primaria */

create table gafanhoto_assite_curso (
    id int NOT NULL AUTO_INCREMENT,
    data date,
    idgafanhoto int,
    idcurso int,
    PRIMARY KEY(id),
    FOREIGN KEY(idgafanhoto) REFERENCES gafanhotos(id),
    FOREIGN KEY(Idcurso) REFERENCES cursos(idcurso)
)DEFAULT CHARSET = utf8;

teste git
segundo test
terceiro teste

sdas

