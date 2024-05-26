

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="my-8 text-center w-3/4 md:w-1/3 mx-auto">
            <p className="text-yellow-600 mb-2 ">---{subHeading}---</p>
            <h3 className="uppercase text-2xl md:text-3xl border-y-2 py-4">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;