import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  data: [
    {
      maBanner: 1,
      img: 'https://i.ytimg.com/vi/l0AUy7MVJXk/maxresdefault.jpg',
      link: "https://www.youtube.com/watch?v=uoKSzOuPcfY",
    },

    {
      maBanner: 2,
      img: "https://touchcinema.com/storage/slider-app/1440wx600h-1-1617891050.jpg",
      link: "https://www.youtube.com/watch?v=kBY2k3G6LsM",
    },

    {
      maBanner: 3,
      img: "https://www.venuscinema.vn/uploaded/slideshow/banner-nguoi-kien-rap-phim-venuscinema.jpg",
      link: "https://www.youtube.com/watch?v=RhsV6wdeR3Y",
    },
  ],
  modalData: ''
}

const BannerReducer = createSlice ({
  name: 'BannerReducer',
  initialState,
  reducers: {
    getBannerMovie: (state, {type, payload}) => {
      return {...state}
    },
    getModalVideo: (state, {type, payload}) => {
const videoId = getId(payload)
return {...state, modalData: videoId}
    }
  }
});

export const {getBannerMovie, getModalVideo} = BannerReducer.actions
export default BannerReducer.reducer

function getId (url) {
  const regExp= /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11)
  ? match[2]
  : null;
}

