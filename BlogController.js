class BlogController extends ConnectionServer{
    static getDataCep(cep)
    {
        return new Promise(resolve => {
            this.sendRequest(`https://viacep.com.br/ws/${cep}/json/`,'GET',null, resolve)
        })
    }
}