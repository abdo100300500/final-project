import React from 'react'
import "./Style/home.css"
import MovieCard from '../../Shared/MovieCard'
function Home() {
  return (
    <>
    <section className="popular-movies-section">
      <div className="container">
        <MovieCard/>
      </div>
    </section>
    </>
    
  )
}

export default Home