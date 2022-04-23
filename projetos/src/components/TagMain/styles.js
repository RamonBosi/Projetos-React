import styled from 'styled-components'

export const TagMain = styled.main`
    display: flex;
    padding: 10px;
    color: var(--default-white);
    
    @media(max-width: 860px){
        flex-direction: column;
    }
`