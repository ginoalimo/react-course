import { VscGlobe } from 'react-icons/vsc';

const options = { method: 'GET' };



export const Post = () => {

    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }}>
        <VscGlobe/>Traer datos
    </button>
}