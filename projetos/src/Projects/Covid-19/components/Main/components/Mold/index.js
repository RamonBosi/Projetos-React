import { Container } from "./styles"

export default function Mold({ mainTitle, content }){
    return(
        <Container>
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