import { useNavigate } from 'react-router-dom';

const useReturnToHomepage = () => {
    const navigate = useNavigate();

    const returnToHomepage = () => {
        navigate('/browse');
        console.log("Logo clicked, navigating to /browse");
    };

    return returnToHomepage;
};

export default useReturnToHomepage;
