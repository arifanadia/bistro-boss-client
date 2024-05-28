import { Parallax } from 'react-parallax';

const Cover = ({ img,title,miniTitle,subTitle,description}) => {
    return (

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
            className='mb-16'
        >
            <div className="hero h-[400px] ">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <h1 className="mb-5 text-3xl font-bold uppercase">{miniTitle}</h1>
                        <h4 className="mb-5 text-xl font-bold uppercase">{subTitle}</h4>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;