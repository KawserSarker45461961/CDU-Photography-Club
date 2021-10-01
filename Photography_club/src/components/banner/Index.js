
import React from 'react';
import './style.scss';
import { useHistory } from 'react-router';
import { SearchLarge } from '../search/Index'

export const Banner = () => {
    const history = useHistory()

    return (
        <div className="banner-container">
            <div className="banner-overlay">
                <div className="flex-center flex-column text-center">
                    <div className="content-card">
                        <h1 className="text-white fw-bold mb-3">CDU PHOTOGRAPHY CLUB</h1>
                        <p className="text-white mb-4">Share your photos and preview photos from past years</p>

                        <SearchLarge
                            onSearch={value => history.push(`/search?query=${value.query}`)}
                        />

                        <div className="pt-2">
                            <small className="text-white-50">Keywords: IT Code Fair, Cultural programs, Sport Events etc...
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
