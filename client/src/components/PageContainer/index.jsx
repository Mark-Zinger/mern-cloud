import Container from '@mui/material/Container';



export default function PageContainer (props) {

    return (
        <Container maxWidth="lg" sx={{pt: '80px', minHeight: '100vh'}} {...props}>
            {props.children}
        </Container>
    )
}