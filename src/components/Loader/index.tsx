import './index.scss';

const Loader = (): JSX.Element => {
    return (
        <div className="loader-container">
            <div className="lds-dual-ring"></div>
        </div>
    );
};

export default Loader;
