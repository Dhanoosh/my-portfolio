import React from 'react';

const Presentation = () => {
    return (
        <section>
      <h2 className='title'>Presentation</h2>
        <div className="video-container">
            <div className="video-box">
            <iframe
                    width="560"
                    height="315" 
                    src="https://www.youtube.com/embed/7p9TzlqbqZc" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
                <div className="video-info">
                    <h2>QnABot</h2>
                    <p>Learn how to make QnA bot in simple and elegant steps</p>
                </div>
            </div>

            <div className="video-box">
                <iframe
                    width="560"
                    height="315" 
                    src="https://www.youtube.com/embed/7p9TzlqbqZc" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
                <div className="video-info">
                    <h2>PatientFirst</h2>
                    <p>A product pitch on revolutionising Primary care</p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Presentation;
