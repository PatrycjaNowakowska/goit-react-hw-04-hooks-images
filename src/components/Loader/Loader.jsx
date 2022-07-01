import { Loading } from 'notiflix/build/notiflix-loading-aio';


const loader = () => {
    Loading.standard('Loading...', {
        backgroundColor: 'rgba(0,0,0,0.8)',
        clickToClose: true,
    });
    Loading.remove(300);
}

export default loader;