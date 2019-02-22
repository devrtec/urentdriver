export class CommonLibrary {
    public validation_messages = {
        'campo':  { type: 'required', message: 'Campo obrigatório.' },
        'celular': [  
                { type: 'validNum', message: 'O número não é 123.' }
            ]
        }
}