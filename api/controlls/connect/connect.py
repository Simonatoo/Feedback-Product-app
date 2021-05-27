class Conection:
    def __init__(self):
        self.login = 'gui'
        self.password = '123'

    def login(self):
        login = True
        try:
            login
        except:
            return print('Falhou')
        return print('logado')

    def close_connection(self):
        result = print('Servidor fechado.')
        return result
