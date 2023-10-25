from app import create_app, db
from app.models import Equipe
import datetime

# Crie uma instância do aplicativo Flask
app = create_app()

# Use o contexto do aplicativo para garantir que as operações sejam feitas no aplicativo
with app.app_context():
    # Crie um objeto Equipe
    equipe = Equipe(
        nome="Nome da Equipe",
        matricula_gestor=12345,
        matricula_gestor_substituto=54321,
        data_inicio=datetime.datetime(2023, 10, 15),  # Lembre-se de importar datetime
        data_fim=datetime.datetime(2023, 12, 31),
        responsavel_cadastro=9876,
        data_cadastro=datetime.datetime.now(),
    )

    # Adicione a equipe ao banco de dados
    db.session.add(equipe)
    db.session.commit()

# Verifique se a equipe foi adicionada com sucesso
print("Equipe adicionada com sucesso!")

# Certifique-se de lidar com exceções e erros de forma apropriada em um ambiente de produção.
