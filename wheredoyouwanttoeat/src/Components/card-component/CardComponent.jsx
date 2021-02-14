import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { axiosCalls } from '../Utils';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({ cardHeading, placeId }) {
  const classes = useStyles();

  const [show, setShow] = useState(false);

  const [results, setResults] = useState({
    name: '',
    rating: '',
    formatted_phone_number: '',
    icon: '',
    website: '',
    formatted_address: ''    
  });

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    function fetchData() {
      axiosCalls(`http://localhost:8080/search-results/details/${placeId}`)
        .then(response => setData(response.data.result));
    }

    fetchData();
  }

  const setData = (data) => {
    setResults({...results, name: data.name, rating: data.rating, formatted_phone_number: data.formatted_phone_number, icon: data.icon, website: data.website, formatted_address: data.formatted_address});
  }

  return (
    <div>
      <Card className={classes.root} onClick={handleShow}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {cardHeading}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{results.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Rating: {results.rating}</p>
          <p>Phone Number: {results.formatted_phone_number}</p>
          <p>Website: <a href={results.website}>Click Here</a></p>
          <p>Address: {results.formatted_address}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>

  );
}

