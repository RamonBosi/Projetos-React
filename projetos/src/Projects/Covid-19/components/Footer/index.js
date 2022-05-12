import { Footer } from './styles'

export default function CreateFooter(){
    return(
        <Footer>
            <div>
                <h2>Sites usados como referência</h2>
                <div>
                    <p>Construção do <a 
                        href = 'https://coronavirus.es.gov.br/' 
                        target = '_blank'
                        rel = 'noopener noreferrer'> layout do site</a>
                    </p>
                    <p>Site da API usada para <a 
                        href = 'https://covid19-brazil-api-docs.vercel.app/' 
                        target = '_blank'
                        rel = 'noopener noreferrer'> construir os gráficos</a>
                    </p>
                </div>
            </div>
        </Footer>
    )
}