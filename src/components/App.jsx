import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import getImages from 'utils/apiCalls';
import Modal from './Modal/Modal';


function App() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const [webformatURL, setWebformatURL] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  // const [error, setError] = useState(null);

  const toogleLoading = () => {
    setIsLoading(!isLoading);
  };

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  const inputValue = e => {
    setSearchInputValue(e.target.value);
  };

  const submitValue = e => {
    e.preventDefault();
    fetchImages();
  };

  const loadMore = e => {
    e.preventDefault();
    fetchImages();
  };

  const openModal = e => {
    setLargeImageURL(e.target.dataset.source);
    setTags(e.target.alt);
    toogleModal();
  };

  // const fetchMainView = () => {
  //   fetch(
  //     `https://pixabay.com/api/?key=11008307-2b498b2b7ae6a379a84554860&q=&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=9`
  //   )
  //     .then(data => data.json())
  //     .then(searchInputValue => {
  //       //setImages(searchInputValue.hits);
  //       setShowButton(true);
  //     })
  //     .catch(error => console.log(error));
  // };

  const fetchImages = async () => {
    if (searchInputValue.trim() === '') {
      return Notify.info('Put a keyword if you want search something');
    }
    toogleLoading();

    try {
      const request = await getImages(searchInputValue, page);
      setImages([...images, ...request]);
      //jak dobrać się do poprzednich images setImages(prevState => [...prevState, ...request.data.hits]); 
      setPage(page + 1);
      setShowButton(true);

      if (request.length === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search. Please try something else.'
        );
      }
    } catch (error) {
      Notify.failure('OOpsi. Something is wrong. Please, try again.');
    } finally {
      toogleLoading();
    }
  };

  // useEffect(() => {
  //   fetchMainView();

  // });

  //   // const componentDidUpdate(_prevProps, prevState) {
  //   //   if (prevState.searchInputValue !== this.state.searchInputValue) {
  //   //     this.setState({ images: [], page: 1, error: null });
  //   //   }
  //   // }

  return (
    <div>
      <Searchbar
        onSubmit={submitValue}
        inputValue={inputValue}
        value={searchInputValue}
      />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}

      {images.length > 0 && (
        <Button label={'Load more'} fetchMoreImages={loadMore} />
      )}

      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          toogleModal={toogleModal}
        />
      )}
    </div>
  );
}
export default App;

























// export class App extends Component {
//   state = {
//     searchInputValue: '',
//     tags: '',
//     images: [],
//     page: 1,
//     totalPages: 0,
//     webformatURL: '',
//     largeImageURL: '',
//     isLoading: false,
//     showModal: false,
//     showButton: true,
//   };

  // toogleLoading = () => {
  //   this.setState(({ isLoading }) => ({
  //     isLoading: !isLoading,
  //   }));
  // };

  // toogleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  // inputValue = e => {
  //   this.setState({ searchInputValue: e.target.value });
  // };

  // submitValue = e => {
  //   e.preventDefault();
  //   this.fetchImages();
  // };

  // loadMore = e => {
  //   e.preventDefault();
  //   this.fetchImages();
  // };

  // openModal = e => {
  //   this.setState(() => ({
  //     largeImageURL: e.target.dataset.source,
  //     tags: e.target.alt,
  //   }));
  //   this.toogleModal();
  // };

  // fetchMainView = () => {
  //   fetch(
  //     `https://pixabay.com/api/?key=11008307-2b498b2b7ae6a379a84554860&q=&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=9`
  //   )
  //     .then(data => data.json())
  //     .then(searchInputValue => {
  //       this.setState(({ images, showButton }) => ({
  //         images: searchInputValue.hits,
  //         showButton: true,
  //       }));
  //     })
  //     .catch(error => console.log(error));
  // };

  // fetchImages = async () => {
  //   if (this.state.searchInputValue.trim() === '') {
  //     return Notify.info('Put a keyword if you want search something');
  //   }
  //   this.toogleLoading();

  //   try {
  //     const request = await getImages(
  //       this.state.searchInputValue,
  //       this.state.page
  //     );
  //     this.setState(({ images, page, showButton }) => ({
  //       images: [...images, ...request],
  //       page: page + 1,
  //       showButton: false,
  //     }));

  //     if (request.length === 0) {
  //       Notify.failure(
  //         'Sorry, there are no images matching your search. Please try something else.'
  //       );
  //     }
  //   } catch (error) {
  //     Notify.failure('OOpsi. Something is wrong. Please, try again.');
  //   } finally {
  //     this.toogleLoading();
  //   }
  // };

//   componentDidMount() {
//     this.fetchMainView();
//   }

//   componentDidUpdate(_prevProps, prevState) {
//     if (prevState.searchInputValue !== this.state.searchInputValue) {
//       this.setState({ images: [], page: 1, error: null });
//     }
//   }

//   render() {
    // return (
    //   <div>
    //     <Searchbar
    //       onSubmit={this.submitValue}
    //       inputValue={this.inputValue}
    //       value={this.state.searchInputValue}
    //     />
    //     <ImageGallery images={this.state.images} openModal={this.openModal} />
    //     {this.state.isLoading && <Loader />}

    //     {!this.state.showButton &&
    //       !this.state.isLoading &&
    //       this.state.images.length >= 9 &&
    //       !this.state.error && (
    //         <Button label={'Load more'} fetchMoreImages={this.loadMore} />
    //       )}

    //     {this.state.showModal && (
    //       <Modal
    //         largeImageURL={this.state.largeImageURL}
    //         tags={this.state.tags}
    //         toogleModal={this.toogleModal}
    //       />
    //     )}
    //   </div>
    // );
//   }
// }

// export default App;