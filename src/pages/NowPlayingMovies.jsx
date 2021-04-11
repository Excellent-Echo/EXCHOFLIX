import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import contentAction from '../redux/actions/contentAction';
import MediaCard from '../components/MediaCard/MediaCard';

const NowPlayingMovies = () => {
    const dispatch = useDispatch()
    const content = useSelector((state) => state.content)

    useEffect(() => {
        dispatch(contentAction.setNowPlayingMovies())
    }, [dispatch])

    return (
        <Container className="nowPlayingMoviesContainer">
            {content.map((value, index) => {
                return <MediaCard value={value} key={index} />
            })}
        </Container>
    );
};

export default NowPlayingMovies;
