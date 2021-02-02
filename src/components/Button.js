import styled from 'styled-components'
export const Buttonc =styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:mainyellow;
border-color:yellow;
border:0.05rem solid var(--lightBlue);
color:${props=>props.cart?'var(--mainYellow)':'var(--lightBlue)'}
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem ease-in-out;
transition:all 0.5s ease-in-out;
&:hover{
    background:(props)=>props.cart?'var(--mainYellow)':'var(--lightBlue)'}
    color:var(--mainBlue)
}
&:focus{
    outline:none;
}`