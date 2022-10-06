`
CREATE TABLE ESTUDANTE(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREING KEY (turma_id) REFERENCES TURMA(id)
);

CREATE TABLE ESTUDANTE_HOBBY(
    id VARCHAR(255) PRIMARY KEY,
    estudante_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES ESTUDANTE(id),
    hobby_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (hobby_id) REFERENCES HOBBY(id)
);

CREATE TABLE HOBBY(
    id VACHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE TURMA(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255),
    modulo VARCHAR(255) DEFAULT 0
);

CREATE TABLE DOCENTE(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES TURMA(id),
);

CREATE TABLE DOCENTE_ESPECIALIDADE(
    id VARCHAR(255) PRIMARY KEY,
    docente_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (docente_id) REFERENCES DOCENTE(id),
    especialidade_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (especialidade_id) REFERENCES ESPECIALIDADE(id)
);

CREATE TABLE ESPECIALIDADE(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

`