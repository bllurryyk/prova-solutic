# Prova
## Kledyson Henrique Goes Dos Santos

## Instruções para execução do projeto
### Back-End
1-Abra o projeto back_end   
2-Gere a pasta de dependências:
```
python3 -m venv venv
```
3-Instale todas as dependências:  
``` python
pip install -r requirements.txt
```
4-Iniciei o projeto local:
``` python
python manage.py runserver 7000
```

### Front-End
1-Abra o projeto front_end  
2-Instale as dependências:  
``` cmd
npm i
```
3-Inicie o projeto no servidor local:
``` cmd
ng serve
```

### Banco de Dados
Fiz um deploy do banco em um servidor, então não precisa configurar nada localmente, o Back-End já está configurado para utilizar o mesmo
Seguem as credenciais de acesso:
```
Host: cowardly-smiling-coatimundi.data-1.use1.tembo.io
Porta: 5432
Nome do Banco: gestao_empresa
Senha: JShtU93KeQbbebXS
```
Mas caso seja necessário, adicionei o DUMP na pasta banco_dados