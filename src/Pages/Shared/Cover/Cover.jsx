import { Parallax } from 'react-parallax';

const Cover = ({ img,title,miniTitle }) => {
    return (

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[400px] ">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <h1 className="mb-5 text-3xl font-bold uppercase">{miniTitle}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;