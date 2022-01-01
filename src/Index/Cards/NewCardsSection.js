import React, { useState, useEffect } from 'react'
import Card from './Card'
import 'animate.css';

const NewCardsSection = ({ props }) => {

    const newMoviesDefaultState = []
    const [newMovies, setNewMovies] = useState(newMoviesDefaultState)
    const [moreButtonShow, setMoreButtonShow] = useState(true);

    const appendMovies = async () => {

        if (newMovies.length < 10) {

            const { NewMoviesSectionDefaultState, FilteredMoviesDefaultState } = await props.state;
            if( FilteredMoviesDefaultState.length === 0 ){

                const newInterval = newMovies.length + 6
                const newSlice = NewMoviesSectionDefaultState.slice( newMovies.length, newInterval )
        
                newSlice.map( element => {
                    setNewMovies(prevState => [...prevState, element])
                })

            }else{

                const newInterval = newMovies.length + 6
                const newSlice = FilteredMoviesDefaultState.slice( newMovies.length, newInterval )
        
                newSlice.map( element => {
                    setNewMovies(prevState => [...prevState, element])
                })

            }


        }

    }

    const propsawait = async () => {

        const { NewMoviesSectionDefaultState, FilteredMoviesDefaultState } = await props.state;
        let chopped = [];

        if( FilteredMoviesDefaultState.length === 0 ){
            if (NewMoviesSectionDefaultState.length > 4) {
                for (let i = 0; i < 6; i++) {
                    chopped.push(NewMoviesSectionDefaultState[i]);
                }
            }
        }else{
                for (let i = 0; i < 6; i++) {
                    chopped.push(FilteredMoviesDefaultState[i]);
            }
        }

        setNewMovies(chopped)

    }

    useEffect(() => {

        if (newMovies.length <= 10) {
            propsawait();
        }


    }, [props])

    return (
        <>
            <div className="cards-container">
                {
                    newMovies.map(element => {
                        return (
                            <Card props={element} modalEnabled={true} />
                        )
                    })
                }
            </div>
            <div className="more-div">
                <form className="more-form">
                    {moreButtonShow && (<button type="submit" onClick={(e) => {
                        e.preventDefault();
                        appendMovies();
                        setMoreButtonShow(!moreButtonShow)
                    }}>More</button>)}
                    {!moreButtonShow && (<button type="submit" onClick={(e) => {
                        e.preventDefault();
                        propsawait()
                        setMoreButtonShow(!moreButtonShow)
                    }}>Less</button>)}
                </form>
            </div>
        </>
    )
}

export default NewCardsSection
