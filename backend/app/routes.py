from flask import request, jsonify
from app import create_app  # Importe a função create_app

app = create_app()  # Crie a instância do aplicativo

from app.models import Equipe, Escala

# Rota para obter todas as equipes
@app.route('/api/equipes', methods=['GET'])
def get_equipes():
    equipes = Equipe.query.all()
    return jsonify([equipe.__dict__ for equipe in equipes])

# Rota para obter todas as escalas
@app.route('/api/escalas', methods=['GET'])
def get_escalas():
    escalas = Escala.query.all()
    return jsonify([escala.__dict__ for escala in escalas])

# Defina rotas para outras operações, como adicionar, atualizar e excluir registros, da mesma forma
