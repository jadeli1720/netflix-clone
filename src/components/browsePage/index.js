import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import NavBar from './navBar';
import Banner from './banner.js';
import Row from './row';
import Loading from '../spinner/loading';
import { mediaRequests } from '../../services/mediaRequests';
import { FirebaseContext } from '../../context/firebase';

import "./styles/index.scss";
import SelectedProfile from '../profilePage';

export default function BrowsePage() {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    // const mediaCategories = 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)

    }, [profile?.displayName]);

    //I don't think I can do this because the data fetching happens in the child component. Not this component. May need to use redux or context to pass props around easier.
    // useEffect(() => {
    //     const fuse =  Fuse()
    // }, [searchTerm]);
    // console.log(typeof(mediaRequests))

    return profile?.displayName ? (
        <>
        {loading ? <Loading user={ user } /> : <div className='releaseBody'></div>}
            <div className='homeScreen'>
                <NavBar user={ user } searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Banner />
                {mediaRequests.map(({rowId, category, isLargeRow, type, url}) => {
                    return <Row key={rowId}  rowId={rowId} category={category} isLargeRow={isLargeRow} type={type} url={url} />
                })}
            </div>
        </>
    ): (
        <SelectedProfile user = {user} setProfile={setProfile}/>
    );
}

