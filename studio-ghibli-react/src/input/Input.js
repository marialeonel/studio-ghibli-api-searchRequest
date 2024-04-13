import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Input(){
    return (
        <InputGroup className="mb-3" style={{paddingTop: '20px'}}>
            <InputGroup.Text id="inputGroup-sizing-default">
            <i class="bi bi-search-heart"></i>
            </InputGroup.Text>
            <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
    );
}

export default Input;