from app import db

# Modelo para a tabela Equipe
class Equipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255), nullable=False)
    matricula_gestor = db.Column(db.Integer)
    matricula_gestor_substituto = db.Column(db.Integer)
    data_inicio = db.Column(db.DateTime)
    data_fim = db.Column(db.DateTime)
    responsavel_cadastro = db.Column(db.Integer)
    data_cadastro = db.Column(db.DateTime)

# Modelo para a tabela Escala
class Escala(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    colaborador = db.Column(db.Integer)
    data = db.Column(db.DateTime)
    modalidade = db.Column(db.String(255))
    status = db.Column(db.String(255))
    observacao = db.Column(db.Text)
    gestor_autorizou = db.Column(db.Integer)
    data_cadastro = db.Column(db.DateTime)
    mes = db.Column(db.String(7))

# Defina modelos para outras tabelas da mesma maneira
