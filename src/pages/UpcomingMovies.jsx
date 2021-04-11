import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import contentAction from '../redux/actions/contentAction';
import MediaCard from '../components/MediaCard/MediaCard';

const UpcomingMovies = () => {
    const dispatch = useDispatch()
    const content = useSelector((state) => state.content)

    useEffect(() => {
        dispatch(contentAction.setUpcomingMovies())
    }, [dispatch])

    return (
        <Container className="upcomingMoviesContainer">
            {content.map((value, index) => {
                return <MediaCard value={value} key={index} />
            })}
        </Container>
    );
};

export default UpcomingMovies;
