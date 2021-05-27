from controlls.connect import connect

__SERVER = connect.Connection()

class Controller:
    def product_create(self,name):
        __SERVER.login()
        valor = print('O produto '+name+' foi criado')
        return valor

if __name__=='__main__':
    print('')
