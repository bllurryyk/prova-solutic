# Prova
## Kledyson Henrique Goes Dos Santos

## Instruções para execução do projeto
### Back-End
Abra o projeto back_end   
Gere a pasta de dependências:
```
python3 -m venv venv
```
Instale todas as dependências:  
``` python
pip install -r requirements.txt
```
Iniciei o projeto local:
``` python
python manage.py runserver 7000
```

### Front-End
Abra o projeto front_end  
Instale as dependências:  
``` cmd
npm i
```
Inicie o projeto no servidor local:
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