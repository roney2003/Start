import loader from '/loader.gif'

const Loading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-black">
            <img src={loader} alt="loader" />
        </div>
    );
}

export default Loading;