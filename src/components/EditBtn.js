import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import axios from '../config';

const EditBtn = (props) => {

    const onDelete = () => {
        let token = localStorage.getItem('token');

        axios.delete(`/${props.resource}/${props.id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
             .then((response) => {
                 console.log(response.data);
                props.callback(props.id);
                 
             })
             .catch((err) => {
                 console.error(err);
                 console.log(err.response.data.message);

             });
    };

    return (
        <Button 
            startIcon={<DeleteIcon />}
            variant='outlined'
            color='error'
            onClick={onDelete}
        >
            Delete
        </Button>
    );
};

export default DeleteBtn;