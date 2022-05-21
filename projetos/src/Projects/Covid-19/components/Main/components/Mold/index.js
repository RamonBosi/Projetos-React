import { Container } from "./styles"

export default function Mold({ mainTitle, content, id }){
    return(
        <Container id = {id}>
            <div>
                <header>
                    <h2>{mainTitle}</h2>
                </header>
                <section>
                    {content}
                </section>
            </div>
        </Container>
    )
}